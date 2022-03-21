const { transformFileSync } = require('@babel/core');
const exerciseRemovePlugin = require('./plugins/exercise-console-remove');
const path = require('path');

const { code } = transformFileSync(path.join(__dirname, './sourceCode.js'), {
  plugins: [exerciseRemovePlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']       
  }
});

console.log(code);