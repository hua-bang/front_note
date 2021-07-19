const Compiler = require("./Compiler");

function myWebpack(config) {
  return new Compiler(config);
}



module.exports = myWebpack;