// loader本质是函数

/**
 * 
 * @param {*} content 文件信息
 * @param {*} map source-map
 * @param {*} meta 元信息
 */
// module.exports = function(content, map, meta) {
//   console.log("loader1");
//   return content;
// }

// 也属于同步
module.exports = function (content, map, meta) {
  console.log("loader1");
  this.callback(null, content, map, meta);
}