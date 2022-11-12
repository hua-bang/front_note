function hoistFunctionEnvironment(path, types) {
  const thisEnv = path.findParent((parent) => {
    return (
      (parent.isFunction() && !path.isArrowFunctionExpress()) ||
      parent.isProgram()
    )
  });

  if (!thisEnv.hasGenerateThis) {
    thisEnv.scope.push({
      id: types.identifier("_this"), //生成标识符节点,也就是变量名
      init: types.thisExpression(), //生成this节点 也就是变量值
    });
    thisEnv.hasGenerateThis = true;
  }

  let thisPaths = [];

  path.traverse({
    ThisExpression(thisPath) {
      thisPath.replaceWith(types.identifier("_this"));
    },
  });
}

module.exports = function({ types, template }, options) {
  return {
    visitor: {
      ArrowFunctionExpression(path) {
        const { node } = path;
        node.type = 'FunctionExpression';

        hoistFunctionEnvironment(path, types);
        if(!types.isBlockStatement(node.body)) {
          node.body = types.blockStatement([
            types.returnStatement(
              node.body,
            )
          ])
        }
      }
    }
  };
};