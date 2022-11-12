const { transformSync } = require('@babel/core');
const transformArrowFunctionPlugin = require('./plugin/transform-arrow-function-plugin');

const fs = require('fs');
const path = require('path');

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf8'
});

const { code } = transformSync(sourceCode, {
  plugins: [ transformArrowFunctionPlugin ]
});

console.log(code);