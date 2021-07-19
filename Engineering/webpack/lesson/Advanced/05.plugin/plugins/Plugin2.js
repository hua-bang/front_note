const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const path = require("path");

const webpack = require("webpack");
const { RawSource } = webpack.sources;

class Plugin2 {
  // 整个 编译生命周期都可以访问 compiler 对象 
  // 可以通过compiler在相应的钩子函数加上回调
  apply(compiler) {
    // 初始化 compilation钩子
    compiler.hooks.thisCompilation.tap("Plugin2", (compilation) => {
      compilation.hooks.additionalAssets.tapAsync("Plugin2", async (cb) => {
        // debugger;
        // console.log(compilation);
        const content = "hello plugin2";
        compilation.assets["a.txt"] = {
          size() {
            return content.size;
          },
          source() {
            return content;
          }
        }

        const data = await readFile(path.resolve(__dirname, "b.txt"));

        compilation.assets["b.txt"] = new RawSource(data);

        cb();
      })
    });
  }
}

module.exports = Plugin2;