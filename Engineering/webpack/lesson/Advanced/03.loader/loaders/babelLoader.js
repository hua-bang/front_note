const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");
const { promisify } = require("util");
const babel = require("@babel/core");

const babelLoaderSchema = require("./babelSchema.json");
const transform = promisify(babel.transform);

module.exports = function (content, map, meta) {
  // 获取loaders的options配置
  const options = getOptions(this) || {};

  // 检验loaders中的options配置是否合法
  validate(babelLoaderSchema, options, {
    name: "Babel Loader"
  });

  const callback = this.async();

  transform(content, options).then(({ code, map }) => {
    callback(null, code, map, options);
  }).catch(e => callback(e));

}