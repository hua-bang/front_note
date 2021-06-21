const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  optimization: {
    minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCssAssetsPlugin({})
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist")
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({})
  ]
};