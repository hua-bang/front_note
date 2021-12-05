const { tplReplace, tplCompiler } = require('../utils/index.js');
const { getOptions } = require('loader-utils');

function tplLoader(source) {
  const { log } = getOptions(this);

  const _log = log ? `console.log('compiled the file which is from ${this.resourcePath}')` : '';

  const content = tplCompiler(source);

  return `
    export default {
      template: '${content}'
    }
  `;
}
module.exports = tplLoader;
