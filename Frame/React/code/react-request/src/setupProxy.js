const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy('/api1', {
      target: "http://localhost:5000",
      changeOrigin: true, //修改请求头host的值
      pathRewrite: {
        "^/api1": ""
      }
    }),
    proxy('/api2', {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: {
        "^/api2": ""
      }
    }),
    proxy('/githubApi', {
      target: "https://api.github.com",
      changeOrigin: true,
      pathRewrite: {
        "^/githubApi": ""
      }
    })
  )  
}