const Plugin1 = require("./plugins/Plugin1");
const Plugin2 = require("./plugins/Plugin2");

module.exports = {
  mode: "development",
  plugins: [
    new Plugin2()
  ]
};