const { transformFromAstSync } = require('@babel/core');
const parser = require('@babel/parser');
const autoApiDocsPlugin = require('./plugin/auto-api-docs-plugin');
const fs = require('fs');
const path = require('path');

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.ts'), {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx', 'typescript'],
});

const { code } = transformFromAstSync(ast, sourceCode, {
  plugins: [[autoApiDocsPlugin, {
    format: 'markdown',
    outputDir: path.resolve(__dirname, './output')
  }]]
});

console.log(code);