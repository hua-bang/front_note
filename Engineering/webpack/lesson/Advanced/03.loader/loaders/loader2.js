
// 异步loader
module.exports = function (content) {
  console.log("loader2");

  // 此时都会等待执行
  const callback = this.async();
  
  setTimeout(() => {
    // callback调用后继续执行
    callback(null, content);
  }, 1000);
}