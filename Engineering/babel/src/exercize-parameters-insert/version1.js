const parser = require('@babel/parser');  // parse source code to ast
const traverse = require('@babel/traverse').default;  // transform ast
const generate = require('@babel/generator').default; // generate ast to source code
const types = require('@babel/types');

const sourceCode = `
  console.log(1);

  function func() {
    console.info(2);
  }

  export default class Clazz {
    say() {
      console.debug(3);
    }

    return() {
      return <div>{console.error(4)}</div>
    }
  }
`;

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

traverse(ast, {
  CallExpression(path, state) {
    const calleeName = generate(path.node.callee).code;
    if (targetCalleeName.includes(calleeName)) {
      const { line, column } = path.node.loc.start;
      path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`));
    }
  }
});

const { code, map } = generate(ast);
console.log(code);
