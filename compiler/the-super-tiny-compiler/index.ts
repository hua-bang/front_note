/**
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 */

// code(lisp) -> ast(lisp) -> ast(c) -> code(c)

/**
 * Parse: code -> ast
 * Transform: ast -> ast
 * Generate: ast -> code 
 */

interface Token {
  type: string;
  value: string;
}

interface AstNode {
  type: string;
  name?: string;
  [key: string]: any;
}

function tokenizer(input: string) {
  let current = 0;
  const tokens: Token[] = [];
  
  while(current < input.length) {
    let char = input[current];

    if(char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }
    if(char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }
    
    let WHITESPACE = /\s/;
    if(WHITESPACE.test(char)) {
      current++;
      continue;
    }

    let NUMBERS = /[0-9]/;
    if(NUMBERS.test(char)) {
      let value = '';

      while(NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      };

      tokens.push({
        type: 'number',
        value
      });

      continue;
    }

    if(char === '"') {
      let value = '';

      char = input[++current];

      while(char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({
        type: 'string',
        value,
      });

      continue;
    }
    
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // Again we're just going to loop through all the letters pushing them to
      // a value.
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // And pushing that value as a token with the type `name` and continuing.
      tokens.push({ type: 'name', value });

      continue;
    }

    throw new TypeError('I don\'t know what this character is: ' + char);
  } 
  return tokens;
}

function parser(tokens: Token[]) {
  let current = 0;

  function walk() {
    let token = tokens[current];

    if(token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current];
      
      let node: AstNode = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      token = tokens[++current];

      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        const nextNode = walk();
        node.params.push(nextNode);
        token = tokens[current];
      }

      current++;
      return node;
    }
    throw new TypeError(token.type);
  }

  let ast: AstNode = {
    type: 'Program',
    body: [],
  };

  while(current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}

function traverser(ast: AstNode, visitor: any) {
  function traverseArray(array: AstNode[], parent: AstNode) {
    array.forEach(child => {
      traverseNode(child, parent);
    })
  }

  function traverseNode(node: AstNode, parent: AstNode | null) {
    let methods = visitor[node.type];
    
    if(methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node);
        break;
      case 'CallExpression':
        traverseArray(node.params, node);
        break;
      case 'NumberLiteral':
      case 'StringLiteral':
        break;
      default:
        throw new TypeError(node.type); 
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  traverseNode(ast, null);
}

function transform(ast: AstNode) {
  let newAst: AstNode = {
    type: 'Program',
    body: [],
  };

  ast._context = newAst.body;

  traverser(ast, {
    NumberLiteral: {
      enter(node: AstNode, parent: AstNode| null) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        parent?._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    StringLiteral: {
      enter(node: AstNode, parent: AstNode| null) {
        parent?._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    CallExpression: {
      enter(node: AstNode, parent: AstNode| null) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression: any = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent?.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent?._context.push(expression);
      }
    }
  });

  return newAst;
}

function codeGenerator(node: AstNode): string {

  // We'll break things down by the `type` of the `node`.
  switch (node.type) {

    case 'Program':
      return node.body.map(codeGenerator).join('\n');

    case 'ExpressionStatement':
      return codeGenerator(node.expression) + ';';

    case 'CallExpression':
      return codeGenerator(node.callee) + '(' + node.arguments.map(codeGenerator).join(', ') + ')';
    case 'Identifier':
      return node.name || '';

    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError(node.type);
  }
}

const compile = (sourceCode: string) => {
  const token = tokenizer(sourceCode);
  const ast = parser(token);
  const newAst = transform(ast);
  const output = codeGenerator(newAst);
  return output;
}

const input = '(add 2 (subtract 4 2))';
const output = compile(input);

console.log(output);