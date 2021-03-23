const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "build.js"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            {test: /\.js?$/, exclude: /(node_modules)/, loader: "babel-loader"}
        ]
    },

    devServer: {
        port: 8501,
        compress: true,
        open: true,
        hot: true
    }
}