const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: {
    // 多入口 有n个入口 就有n个bundle
    main: "./src/js/index.js",
    test: "./src/js/test.js"
  },
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build")
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};