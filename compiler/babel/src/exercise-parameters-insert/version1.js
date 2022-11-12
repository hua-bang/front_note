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
  CallExpression(path, state) {
    const { node } = path;
    if(checkConsoleFn(node.callee)) {
      const { line, column } = path.node.loc.start;
      node.arguments.push(types.stringLiteral(`line: ${line}, column: ${column}`));
    }
  }
});

// generate
const output = generate(ast);

console.log(output.code);

