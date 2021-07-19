const webpack = require("../lib/myWebpack/index");
const config = require("../config/webpack.config");

let compiler = webpack(config);

compiler.run();