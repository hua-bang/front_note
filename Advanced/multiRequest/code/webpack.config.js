const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bilut.js",
        path: path.join(__dirname, "./dist")
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        hot: true,
        proxy: {
            "/api": {
              target: 'http://203.195.178.160',
              pathRewrite: {'^/api' : ''},
              changeOrigin: true
            }
        },
    },
};