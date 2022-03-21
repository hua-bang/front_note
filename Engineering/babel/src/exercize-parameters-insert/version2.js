const fs = require('fs');

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const template = require('@babel/template').default;

const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

const sourceCode = fs.readFileSync('./sourceCode.js', {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

traverse(ast, {
  CallExpression(path, state) {
    //  needn't to handle new node
    if (path.node.isNew) {
      return;
    }

    const calleeName = generate(path.node.callee).code;
    if (targetCalleeName.includes(calleeName)) {
      const { line, column } = path.node.loc.start;
      const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)();
      newNode.isNew = true;

      if (path.findParent(path => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]))
        path.skip();
      } else {
        path.insertBefore(newNode);
      }
    }
  } 
});

const { code, map } = generate(ast);

console.log(code);

fs.writeFileSync('./build/version2.js', code, {
  encoding: 'utf-8'
});