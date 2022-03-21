const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");
const schema = require("./schema.json");

module.exports = function (content) {
  const options = getOptions(this);
  validate(schema, options, {
    name: "loader3"
  });
  return "loader " + content;
}