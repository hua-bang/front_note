const { declare } = require('@babel/helper-plugin-utils');
const importModule = require('@babel/helper-module-imports');

const commentRemovePlugin = declare((api, options, dirname) => {
  return {
    visitor: {
      Program(path) {
        path.traverse({
          // 遍历节点
          enter(path, state) {
            if (
              path.node &&
              ( path.node.leadingComments ||path.node.trailingComments)
            ) {
              path.node.leadingComments = [];
              path.node.trailingComments = [];
            }
          }
        });
      }
    }
  }
});

module.exports = commentRemovePlugin;