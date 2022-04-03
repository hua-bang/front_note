const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const template = require('@babel/template').default;
const fs = require('fs');
const path = require('path');

const checkConsoleFn = (callee) => {
  return callee.object.name === 'console' && ['log', 'info', 'error', 'debug'].includes(callee.property.name);
};

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf-8'
});

// parse
const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

// transform
traverse(ast, {
  CallExpression (path, state) {
    const { loc, callee } = path.node;
    if (!loc) { 
      return;
    }
    if (checkConsoleFn(callee)) {
      const { line, column } = loc.start;
      const newNode = template.expression(`console.log('filename: ${line}, ${column}')`)();
      if (path.findParent(path => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]));
        path.skip();
      } else {
        path.insertBefore(newNode);
      }
    }
  }
});

// generate code
const { code } = generate(ast);
console.log(code);

