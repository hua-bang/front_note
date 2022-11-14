const { transformSync } = require('@babel/core');
const autoTrackerPlugin = require('./plugin/auto-tracker-plugin');

const fs = require('fs');
const path = require('path');

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf8'
});

const { code } = transformSync(sourceCode, {
  plugins: [ autoTrackerPlugin ]
});

console.log(code);