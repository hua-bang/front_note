const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

function myWebpack(config) {
  return new Compiler(config);
}

class Compiler {
  constructor(options = {}) {
    this.options = options;
  }

  // 启动打包
  run() {
    // 1. 读取入口文件内容
    // 入口文件路径
    const filePath = path.resolve(__dirname, "../", this.options.entry);
    const file = fs.readFileSync(filePath, "utf-8");
    // 2. 将其解析AST抽象语法树
    const ast = babelParser.parse(file, {
      sourceType: "module"
    });

    // debugger
    // console.log(ast);

    // 获取到文件文件夹路径
    const dirname = path.dirname(filePath);

    // 定义存储依赖的容器
    const deps = {};
    // 收集依赖
    traverse(ast, {
      // 内部遍历ast中的program.body, 并判断类型
      // 如果 type: ImportDeclaration 会触发当前的函数
      ImportDeclaration({ node }) {
        // 文件相对路径: "./add.js"
        const relativePath = node.source.value;
        const absolutePath = path.resolve(dirname, relativePath);
        deps[relativePath] = absolutePath;
      }
    });
    console.log(deps);

    // 编译代码 将代码中游览器不能死别的语法进行编译
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"]
    });

    console.log(code);
  }

}

module.exports = myWebpack;