const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [
        //   "loader1.js",
        //   "loader2.js",
        //   {
        //     loader: "loader3.js",
        //     options: {
        //       name: "hug"
        //     }
        //   }
        // ]
        loader: "babelLoader",
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  mode: "development",
  // 配置loader解析规则
  resolveLoader: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "loaders")
    ]
  }
};