const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");
const { getAst, getDeps, getCode } = require("./parser");

class Compiler {
  constructor(options = {}) {
    this.options = options;
  }

  // 启动打包
  run() {
    // 1. 读取入口文件内容
    // 入口文件路径
    const filePath = path.resolve(__dirname, "../", this.options.entry);
    // 2. 文件解析成ast
    const ast = getAst(filePath);
    // 3. 文件获取依赖
    const deps = getDeps(ast, filePath);
    // 4. 将ast解析成代码
    const code = getCode(ast);

    console.log(ast);
    console.log(deps);
    console.log(code);
  
  }

}

module.exports = Compiler;