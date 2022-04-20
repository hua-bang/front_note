const { declare } = require('@babel/helper-plugin-utils');
const generate = require('@babel/generator').default;
const fse = require('fs-extra');
const path = require('path');

let intlIndex = 0;
function nextIntlKey() {
    ++intlIndex;
    return `intl${intlIndex}`;
}

const autoI18nPlugin = declare((api, options, dirname) => {

  if (!options.outputDir) {
    throw new Error('outputDir in empty');
  }
  
  function getReplaceExpression(path, value, intlUid) {
    const expressionParams = path.isTemplateLiteral() ? path.node.expressions.map(item => generate(item).code) : null
    let replaceExpression = api.template.ast(`${intlUid}.t('${value}'${expressionParams ? ',' + expressionParams.join(',') : ''})`).expression;
    if (path.findParent(p => p.isJSXAttribute()) && !path.findParent(p=> p.isJSXExpressionContainer())) {
        replaceExpression = api.types.JSXExpressionContainer(replaceExpression);
    }
    return replaceExpression;
  }

  function save(file, key, value) {
    const allText = file.get('allText');
    allText.push({
        key, value
    });
    file.set('allText', allText);
  }

  
  return {
    pre(file) {
      file.set('allText', []);
    },
    visitor: {
      Program: {
        enter(path, state) {
          let imported = false;
          path.traverse({
            ImportDeclaration(curPath) {
              const curImportName = curPath.node.source.value;
              if (curImportName === 'intl') {
                imported = true;
                const specifierPath = curPath.get('specifiers.0');
                state.intlUid = specifierPath.get('local').toString();
              }
            }  
          });
          if (!imported) {  
            const uid = path.scope.generateUid('intl');
            const importAst = api.template.ast(`import ${uid} from 'intl'`);
            path.node.body.unshift(importAst);
            state.intlUid = uid;
          }
          
          path.traverse({
            'TemplateLiteral|StringLiteral'(path) {
              if (path.node.leadingComments) {
                path.node.leadingComments = path.node.leadingComments.filter((comment, index) => {
                  if (comment.value.includes('i18n-disable')) {
                    path.node.skipTransform = true;
                    return false;
                  }
                  return true;
                });
              }
              if(path.findParent(p => p.isImportDeclaration())) {
                path.node.skipTransform = true;
              }
            }
          });
        }
      },
      StringLiteral(path, state) {
        if (path.node.skipTransform) {
          return ;
        }
        let key = nextIntlKey();
        save(state.file, key, path.node.value);
        const replaceExpression = getReplaceExpression(path, key, state.intlUid);
        path.replaceWith(replaceExpression);
        path.skip();
      },
      TemplateLiteral(path, state) {
        if (path.node.skipTransform) {
          return ;
        }
        const value = path.get('quasis').map(item => item.node.value.raw).join('{placeholder}');
        if (value) {
          let key = nextIntlKey();
          save(state.file, key, value);
          const replaceExpression = getReplaceExpression(path, key, state.intlUid);
          path.replaceWith(replaceExpression);
          path.skip();
        }
      }
    },
    post(file) {
      const allText = file.get('allText');
      const intlData = allText.reduce((obj, item) => {
          obj[item.key] = item.value;
          return obj;
      }, {});

      const content = `const resource = ${JSON.stringify(intlData, null, 4)};\nexport default resource;`;
      fse.ensureDirSync(options.outputDir);
      fse.writeFileSync(path.join(options.outputDir, 'zh_CN.js'), content);
      fse.writeFileSync(path.join(options.outputDir, 'en_US.js'), content);
    }
  }
});

module.exports = autoI18nPlugin;