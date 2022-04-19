interface Token {
  type: string;
  value: string;
}

interface NodeType {
  type: string;
  value?: string;
  body?: NodeType[];
  params?: NodeType[];
  name?: string;
  _context: NodeType[];
  [key: string]: any;
}

type VisitNodeFn = (node: NodeType, parent: NodeType | null) => void;

interface Visitor {
  [key: string]: {
    enter?: VisitNodeFn;
    exit?: VisitNodeFn;
  };
}

export function tokenizer(input: string):Token[] {
  
  // 距离遍历代码时候所处的下标。 
  let current = 0;

  // 最终得到的TOKEN数组
  const tokens: Token[] = [];

  // 对输入的代码每个字符都要遍历， 提取去对应的TOKEN, 并推入数组中
  while (current < input.length) {

    let char = input[current];

    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      });
      current++;
      continue;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      });
      current++;
      continue;
    }

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';

      while(NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      
      tokens.push({
        type: 'number',
        value,
      });
      continue;
    }

    if (char === '"') {
      let value = '';
      
      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({ type: 'string', value });
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

    // 不能分词的类型 直接抛出异常
    throw new TypeError( 'I dont know what this character is: ' +
    char);
  }
  return tokens;
}

export function parser(tokens: Token[]) {
  let current = 0;

  function walk(): NodeType {
    let token = tokens[current];

    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
        _context: [],
      };
    }
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
        _context: []
      };
    }

    if (
      token.type === 'paren' &&
      token.value === '('
    ) {
      token = tokens[++current];
      let node: NodeType = {
        type: 'CallExpression',
        name: token.value,
        params: [],
        _context: []
      };

      token = tokens[++current];

      while (
        token.type !== 'paren' ||
        (token.type === 'paren' &&
        token.value !== ')')
      ) {
        node.params && node.params.push(walk()!);
        token = tokens[current];
      }
      current++;

      return node;
    }
    throw new TypeError(token.type);
  }

  let ast: NodeType = {
    type: 'Program',
    body: [],
    _context: []
  };

  while (current < tokens.length) {
    ast.body && ast.body.push(walk()!);
  }

  return ast;
}

export function traverser(ast: NodeType, visitor: Visitor) {
 
  function traverseArray(array: NodeType[], parent: NodeType | null) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  function traverseNode(node: NodeType, parent: NodeType | null) {
    let methods = visitor[node.type];

    if(methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
      case 'Program':
        node.body && traverseArray(node.body, node);
        break;
      case 'CallExpression':
        node.params && traverseArray(node.params, node);
        break;
      case 'NumberLiteral':
      case 'StringLiteral':
        break;
      default:
        throw new TypeError(node.type);
    }

    if(methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  traverseNode(ast, null);
}

export function transformer(ast: NodeType) {
  const newAst: NodeType = {
    type: 'Program',
    body: [],
    _context: [],
  };

  ast._context = newAst.body || [];

  traverser(ast, {
    NumberLiteral: {
      enter(node, parent) {
        parent && parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
          _context: [],
        });
      }
    },
    StringLiteral: {
      enter(node, parent) {
        parent && parent._context.push({
          type: 'StringLiteral',
          value: node.value,
          _context: [],
        });
      }
    },
    CallExpression: {
      enter(node, parent) {
        let expression: NodeType = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            value: node.name
          },
          arguments: [],
          _context: [],
        };

        node._context = expression.arguments;
        if (parent) {  
          if (parent.type !== 'CallExpression') {
            expression = {
              type: 'ExpressionStatement',
              expression: expression,
              _context: [],
            };
          }
          parent._context.push(expression);
        }
      }
    }
  });

  return newAst;
}

function codeGenerator(node: NodeType): string {
  switch (node.type) {
    case 'Program': 
      return node.body!.map(codeGenerator).join('\n');
    case 'ExpressionStatement':
      return codeGenerator(node.expression as NodeType) + ';';
    case 'CallExpression':
      return (
        codeGenerator(node.callee as NodeType) +
          '(' + 
        (node.arguments as NodeType[]).map(codeGenerator).join(', ') +
         ')'
      );
    case 'Identifier':
      return node.value || '';
    case 'NumberLiteral':
      return node.value || '';
    case 'StringLiteral':
      return `"${node.value}"`;
    default:
      throw new TypeError(node.type);
  }
}

export function compiler(input: string) {
  const tokens = tokenizer(input);
  const ast = parser(tokens);
  const newAst = transformer(ast);
  const output = codeGenerator(newAst);

  return output;
}