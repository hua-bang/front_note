const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env"
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          esModule: false
        }
      },
      {
        test: /\.html$/,
        loader: "html-withimg-loader"
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, "./dist"),
    // gzip 压缩
    compress: true,
    port: 4031,
    hot: true
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/built.css"
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ]
};