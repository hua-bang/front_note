const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
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
    const { loc, callee, arguments } = path.node;
    if (checkConsoleFn(callee)) {
      const { line, column } = loc.start;
      arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`));
      console.log(arguments);
    }
  }
});

// generate code
const { code } = generate(ast);
console.log(code);

