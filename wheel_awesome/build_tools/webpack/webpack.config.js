const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MdToHtmlPlugin = require('./plugins/md-to-html-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/custom-loader/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.hug$/,
        use: [
          'babel-loader',
          {
            loader: 'tpl-loader',
            options: {
              log: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new MdToHtmlPlugin({
      template: path.resolve(__dirname, 'test.md'),
      filename: 'test.html'
    })
  ],
  devServer: {
    port: 3333
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
}