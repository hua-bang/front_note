const { declare } = require('@babel/helper-plugin-utils');
const generate = require('@babel/generator').default;
const doctrine = require('doctrine');
const fse = require('fs-extra');
const path = require('path');
const { render } = require('./render/index');


function parseComment(commentStr) {
  if (!commentStr) {
    return ;
  }
  return doctrine.parse(commentStr, {
    unwrap: true,
  })
}

function resolveType(type) {
  if (!type) {
    return 'any';
  }
  switch(type) {
    case 'TSStringKeyword':
      return 'string';
    case 'TSNumberKeyword':
      return 'number';
    case 'TSBooleanKeyword':
      return 'boolean';
  }
}

const formatExtMap = {
  json: 'json',
  markdown: 'md',
}

const autoApiDocsPlugin = declare((api, options, dirname) => {

  function generate(docs, format = 'json') {
    return {
      ext: formatExtMap[format],
      content: render[format](docs)
    }
  }
  
  return {
    pre(file) {
      file.set('docs', []);
    },
    visitor: {
      FunctionDeclaration(path, state) {
        const docs = state.file.get('docs');
        docs.push({
          type: 'function',
          name: path.node.id.name,
          params: path.get('params').map(paramPath => {
              return {
                name: paramPath.toString(),
                type: resolveType(paramPath.getTypeAnnotation().typeAnnotation.type)
              };
            }),
          return: resolveType(path.get('returnType').getTypeAnnotation().type),
          doc: path.node.leadingComments && parseComment(path.node.leadingComments[0].value),
        });
        state.file.set('docs', docs);
      },
      ClassDeclaration (path, state) {
        const docs = state.file.get('docs');
        const classInfo = {
          type: 'class',
          name: path.get('id').toString(), 
          constructorInfo: {},
          methodsInfo: [],
          propertiesInfo: []
        };
        if (path.node.leadingComments) {
          classInfo.doc = path.node.leadingComments[0] ? parseComment(path.node.leadingComments[0].value) : undefined;
        }
        docs.push(classInfo);
        state.file.set('docs', docs);
        path.traverse({
          ClassProperty(path) {
            classInfo.propertiesInfo.push({
              name: path.get('key').toString(),
              type: resolveType(path.getTypeAnnotation().typeAnnotation.type),
              doc: [path.node.leadingComments, path.node.trailingComments].filter(Boolean).map(comment => {
                  return parseComment(comment.value);
              }).filter(Boolean)
            })
          },
          ClassMethod(path) {
            if (path.node.kind === 'constructor') {
              classInfo.constructorInfo = {
                params: path.get('params').map(paramPath=> {
                return {
                  name: paramPath.toString(),
                  type: resolveType(paramPath.getTypeAnnotation().typeAnnotation.type),
                  doc: path.node.leadingComments && path.node.leadingComments[0] && parseComment(path.node.leadingComments[0].value)
                }
              })
            }
          } else {
              classInfo.methodsInfo.push({
                name: path.get('key').toString(),
                doc: parseComment(path.node.leadingComments[0].value),
                params: path.get('params').map(paramPath=> {
                  return {
                    name: paramPath.toString(),
                    type: resolveType(paramPath.getTypeAnnotation().typeAnnotation.type)
                  }
                }),
                return: resolveType(path.get('returnType').getTypeAnnotation().type)
              })
            }
          }
        });
        state.file.set('docs', docs);
      }
    },
    post(file) {
      const docs = file.get('docs');
      const res = generate(docs, options.format);
      fse.ensureDirSync(options.outputDir);
      fse.writeFileSync(path.join(options.outputDir, 'docs.' + res.ext), res.content);
    }
  }
});

module.exports = autoApiDocsPlugin;
