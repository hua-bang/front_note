const checkConsoleFn = (callee) => {
  return callee.object.name === 'console' && ['log', 'info', 'error', 'debug'].includes(callee.property.name);
};

const parametersInsertPlugin = ({ types, template }, options, dirname) => {
  return {
    visitor: {
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
    }
  }
}

module.exports = parametersInsertPlugin;