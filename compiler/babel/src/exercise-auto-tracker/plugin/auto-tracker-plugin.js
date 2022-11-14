module.exports = function (babel) {
  const { types: t, template } = babel;
  
  return {
    visitor: {
      Program(path, state) {
      	let loggerId;
        path.traverse({
          ImportDeclaration(importPath) {
            const { node } = importPath;
            const { value: importNameValue } = node.source;
            if (importNameValue === 'Logger') {
              loggerId = node.specifiers[0].local.name
              importPath.stop();
            }
          }
        });
        if(!loggerId) {
          loggerId = path.scope.generateUid('Logger');
          path.node.body.unshift(
            t.importDeclaration([
              t.importDefaultSpecifier(
                t.identifier(
                  loggerId
                )
              )
            ], t.StringLiteral('Logger'))
          );
        }
        state.loggerId = loggerId;
        state.trackerAST = template.statement(`${loggerId}()`)();
      },
      'FunctionDeclaration|ArrowFunctionExpression|FunctionExpression|ClassMethod'(path, state) {
        const bodyPath = path.get('body');
        if(bodyPath.isBlockStatement()) {
        	bodyPath.node.body.unshift(state.trackerAST)
        } else {
          const ast = template.statement(`{ ${state.loggerId}(); return PREV_BODY;}`)({
            PREV_BODY: bodyPath.node
          });
          bodyPath.replaceWith(ast);
        }
      }
    }
  };
}
