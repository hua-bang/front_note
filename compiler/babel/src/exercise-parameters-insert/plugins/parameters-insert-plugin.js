const checkConsoleFn = (callee) => {
  return callee.object.name === 'console' && ['log', 'info', 'error', 'debug'].includes(callee.property.name);
};

module.exports = function({ types, template }, options) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.isInsert) {
          return;
        }
        const { node } = path;
        if (checkConsoleFn(node.callee)) {
          const { line, column } = path.node.loc.start;
          
          const newNode =  template.expression(`console.log("${state.filename || 'unknown filename'}: (${line}, ${column})")`)();
          newNode.isInsert = true;

          if (path.findParent(path => path.isJSXElement())) {
            path.replaceWith(types.arrayExpression([newNode, path.node]));
            path.skip();
          } else {
            path.insertBefore(newNode);
          }
        }      
      }
    }
  };
};