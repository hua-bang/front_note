const { transformFileSync } = require('@babel/core');
const linterPlugin = require('./plugin/linter-plugin.js');
const path = require('path');

const { code } = transformFileSync(path.join(__dirname, './sourceCode.js'), {
  plugins: [[linterPlugin, {
    autoFix: true
  }]],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']       
  }
});

console.log(code);