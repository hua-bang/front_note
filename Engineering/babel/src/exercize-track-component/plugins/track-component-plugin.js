const { declare } = require('@babel/helper-plugin-utils');
const importModule = require('@babel/helper-module-imports');

const TRACK_IDENTIFIER = 'data-tracker';

const trackComponentPlugin = declare((api, options, dirname) => {
  const trackerPath = options.trackerPath || 'tracker';
  return {
    visitor: {
      Program: {
        enter(path, state) {
          path.traverse({
            ImportDeclaration(curPath) {
              const requirePath = curPath.get('source').node.value;
              if (requirePath === options.trackerPath) {
                const specifierPath = curPath.get('specifiers.0');
                if (specifierPath.isImportSpecifier()) {
                  state.trackerImportId = specifierPath.toString();
                } else if (specifierPath.isImportNamespaceSpecifier()) {
                  state.trackerImportId = specifierPath.get('local').toString();
                }
                path.stop();
              }  
            }
          });
          if (!state.trackerImportId) {
            state.trackerImportId = importModule.addDefault(path, trackerPath, {
              nameHint: 'Tracker',
            }).name;
          }
        }
      },
      JSXElement(path, state) {
        const { node, parent } = path;
        const { openingElement } = node;
        const { attributes = [] } = openingElement;
        const trackerAttributeIndex = attributes.findIndex(item => item.name.name === TRACK_IDENTIFIER);
        let trackId;
        if (trackerAttributeIndex !== -1) {
          const trackerAttribute = attributes[trackerAttributeIndex];
          trackId = trackerAttribute.value.value;
          attributes.splice(trackerAttributeIndex, 1);
          attributes.push(api.template.expression(`{...${state.trackerImportId}.addTracker('${trackId}')}`)());
        }
      }
    }
  }
});

module.exports = trackComponentPlugin;