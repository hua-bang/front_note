const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");
const { getAst, getDeps, getCode } = require("./parser");
const { relative } = require("path");

class Compiler {
  constructor(options = {}) {
    // webpack配置对象
    this.options = options;
    // 所有依赖容器
    this.modules = [];
  }

  // 启动打包
  run() {
    // 1. 读取入口文件内容
    // 入口文件路径
    const filePath = this.options.entry;
    
    // 第一次构建， 得到入口文件信息
    const fileInfo = this.build(filePath);

    this.modules.push(fileInfo);

    // 遍历所有的依赖
    this.modules.forEach((fileInfo) => {
      const deps = fileInfo.deps;

      for (const relativePath in deps) {
        if (Object.hasOwnProperty.call(deps, relativePath)) {
          const absolutePath = deps[relativePath];
          // 对依赖文件进行处理
          const fileInfo = this.build(absolutePath);
          // 处理后的结果添加到modules中，后面遍历就会遍历到
          this.modules.push(fileInfo);
        }
      }
    });

    // 将依赖整合成更好的依赖关系图
    const depsGraph = this.modules.reduce((graph, moudle) => {
      return {
        ...graph,
        [moudle.filePath]: {
          code: moudle.code,
          deps: moudle.deps
        }
      }
    }, {});

    // this.generate(depsGraph);
    this.generateByDepsGraph(depsGraph);
  }

  // 开始构建
  build(filePath) {
    const ast = getAst(filePath);
    // 3. 文件获取依赖
    const deps = getDeps(ast, filePath);
    // 4. 将ast解析成代码
    const code = getCode(ast);

    return {
      // 文件路径
      filePath,
      // 当前文件的所有依赖
      deps,
      // 当前文件解析后代码
      code
    }
  }

  // 生成输出资源
  generate(depsGraph) {
    const bundle = `
      (function(depsGraph) {
        // require目的: 为了加载入口文件
        function require(module) {
          // 定义模块内部的require函数
          function localRequire(relativePath) {
            // 为了要找到引入模块的绝对路径，通过require加载
            return require(depsGraph[module].deps[relativePath]);
          }
          // 定义暴露对象(将来我们模块要暴露的内容)
          var exports = {};

          (function (require, exports, code) {
            eval(code);
          })(localRequire, exports, depsGraph[module].code)

          // 作为require函数值返回值返回回去
          // 后面的require函数能得到暴露的内容
          return exports;
        }

        require('${this.options.entry}');

      })(${JSON.stringify(depsGraph)});
    `

    // 生成绝对路径
    const filePath = path.resolve(this.options.output.path, this.options.output.filename);
    fs.writeFileSync(filePath, bundle, "utf-8");
  }

  generateByDepsGraph(depsGraph) {
    const bundle = `
      (function (depsGraph) {
        function require(module) {
          function localRequire(module) {
            return require(depsGraph[module].deps[relativePath]);
          }

          var exports = {};

          (function (require, exports, code) {
            eval(code);
          })(localRequire, exports, depsGraph[module].code)

          return exports;
        }

        require('${this.options.entry}')
      })(${JSON.stringify(depsGraph)})
    `
  }
}

module.exports = Compiler;