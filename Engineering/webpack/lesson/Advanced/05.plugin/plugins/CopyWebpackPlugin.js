const { validate } = require("schema-utils");
const globby = require("globby");
const path = require("path");
const schema = require("./schema.json");
const fs = require("fs");
const { promisify } = require("util");
const webpack = require("webpack");

const readFile = promisify(fs.readFile);
const { RawSource } = webpack.sources;
 
class CopyWebpackPlugin {
  constructor(options) {
    validate(schema, options, {
      name: "CopyWebpackPlugin"
    })
    this.options = options;
  }

  apply(compiler) {
    // 初始化compilation
    compiler.hooks.thisCompilation.tap("CopyWebpackPlugin", (compilation) => {
      // 添加资源的hooks
      compilation.hooks.additionalAssets.tapAsync("CopyWebpackPlugin",async (cb) => {
        // from -> to
        const { from, ignore } = this.options;
        const to = this.options.to ? this.options.to : ".";
        // 1. 过滤忽略的文件

        // context就是webpack的配置上下文
        // 运行指令的目录
        const context = compiler.options.context.replaceAll("\\", "\/");
        // 转化成绝对路径
        const absPath = path.isAbsolute(from) ? from : path.posix.join(context, from);
        // globby(处理的文件夹，options)
        const paths = await globby(absPath, { ignore });
        
        // 2. 读取from中所有资源
        const files = await Promise.all(
          paths.map(async (absolutePath) => {
            const data = await readFile(absolutePath);
            const relativePath = path.basename(absolutePath);
            const filename = path.join(to, relativePath);

            return {
              data,
              filename
            }
          })
        );

        // 3. 生成webpack的资源
        const assets = files.map(file => {
          const source = new RawSource(file.data);
          return {
            source,
            filename: file.filename
          }
        });

        // 4. 添加compilation,输出
        assets.forEach((asset) => {
          compilation.emitAsset(asset.filename, asset.source);
        });

        cb();
      })
    })
  }

}

module.exports = CopyWebpackPlugin;