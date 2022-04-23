const linterPlugin = ({ types, template }, options, dirname) => {
  
  const { autoFix = false } = options;
  
  return {
    pre(file) {
      file.set('errors', []);
    },
    visitor: {
      ForStatement(path, state) {
        const errors = state.file.get('errors');
        const testOperator = path.node.test.operator;
        const updateOperator = path.node.update.operator;

        let shouldOperator;

        if (['<', '<='].includes(testOperator)) {
          shouldOperator = '++';
        } else if (['>', '>='].includes(testOperator)) {
          shouldOperator = '--';
        }

        if (shouldOperator !== updateOperator) {
          Error.stackTraceLimit = 0;
          errors.push(
            path.get('update').buildCodeFrameError('for direction error', Error)
          );
          if (autoFix) {
            path.node.update.operator = shouldOperator;
          }
        }
      },
      AssignmentExpression(path, state) {
        const errors = state.file.get('errors');

        const assignTarget = path.get('left').toString();

        const binding = path.scope.getBinding(assignTarget);

        if (binding) {
          if (binding.path.isFunctionDeclaration() || binding.path.isFunctionExpression()) {
            Error.stackTraceLimit = 0;
            errors.push(
              path.buildCodeFrameError('can not reassign to function', Error)
            );
          }
        }
      },
      BinaryExpression(path, state) {
        const errors = state.file.get('errors');
        if (['==', '!='].includes(path.node.operator)) {
          const left = path.get('left');
          const right = path.get('right');

          if (!(left.isLiteral() && right.isLiteral() 
            && typeof left.node.value === typeof right.node.value)) {
            Error.stackTraceLimit = 0;
            errors.push(path.buildCodeFrameError(`please replace ${path.node.operator} with ${path.node.operator + '='}`, Error));
                        
            if (autoFix) {
              path.node.operator = path.node.operator + '=';
            }
          }
        }
      },
      VariableDeclaration(path, state) {
        const errors = state.file.get('errors');
        const declarationNode = path.get('kind');
        const declarationKind = declarationNode.node;
        if (declarationKind === 'var') {
          Error.stackTraceLimit = 0;
          errors.push(path.buildCodeFrameError(`suggest you use 'let' replace 'var'`, Error));
        }
      }
    },
    post(file) {
      const errors = file.get('errors');
      errors.forEach((v) => console.log(v));
    }
  }
}

module.exports = linterPlugin;