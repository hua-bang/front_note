const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

function getModuleInfo(file) {
  const body = fs.readFileSync(file, 'utf-8');

  const ast = parser.parse(body, {
    sourceType: 'module'  // es module
  });
  
  const deps = {};

  traverse(ast, {
    // visitor
    ImportDeclaration({node}) {
      // 遇到import节点 回调
      const dirname = path.dirname(file);
      const absPath = './' + path.join(dirname, node.source.value);
      deps[node.source.value] = absPath;
    }
  });

  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  });

  return {
    file,
    deps,
    code
  };
}

function parseModules(file) {
  const entry = getModuleInfo(file);
  const temp = [ entry ];
  const depsGraph = {};

  getDeps(temp, entry);

  temp.forEach(info => {
    depsGraph[info.file] = {
      deps: info.deps,
      code: info.code
    };
  });

  return depsGraph;
}

function getDeps(temp, {deps}) {
  Object.keys(deps).forEach(key => {
    const child = getModuleInfo(deps[key]);
    temp.push(child);
    getDeps(temp, child);
  })
}

function bundle(file) {
  const depsGraph = JSON.stringify(parseModules(file));
  return `
  (function (graph) {
    function require(file) {
      function absRequire(relPath) {
        return require(graph[file].deps[relPath])
      }
      let exports = {};
      (function (require, exports, code) {
        eval(code)
      })(absRequire, exports,graph[file].code)
      return exports
    }
    require('${file}')
  })(${depsGraph})`;
}

const content = bundle('./src/index.js');

!fs.existsSync("./dist") && fs.mkdirSync("./dist");
fs.writeFileSync("./dist/bundle.js", content);