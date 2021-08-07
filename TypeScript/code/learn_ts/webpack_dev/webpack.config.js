const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader"
          },
          "ts-loader"
        ],
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  mode: "production",
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 6154,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};