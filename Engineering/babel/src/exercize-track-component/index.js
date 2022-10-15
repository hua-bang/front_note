const { transformFromAstSync } = require('@babel/core');
const parser = require('@babel/parser');
const fs = require('fs');
const path = require('path');
const trackComponentPlugin = require('./plugins/track-component-plugin');
const fse = require('fs-extra');

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx'],
});

const { code } = transformFromAstSync(ast, sourceCode, {
  plugins: [[ trackComponentPlugin, {
    trackerPath: '@material/tracker'
  }]]
});

console.log(code);

fse.writeFileSync(path.join('./output.js'), code);