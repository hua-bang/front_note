const targetCalleeNames = ['log', 'info', 'error', 'debug'];

const checkConsole = (node) => {
  return (node.callee.object.name === 'console') && ( targetCalleeNames.includes(node.callee.property.name)); 
}

const parametersInsertPlugin = ({ types, template }, options, dirname) => {
  return {
    visitor: {
      CallExpression(path, state) {
        const node = path.node;
        if (checkConsole(node)) {
          path.remove();
        }
      }
    }
  }
}

module.exports = parametersInsertPlugin;