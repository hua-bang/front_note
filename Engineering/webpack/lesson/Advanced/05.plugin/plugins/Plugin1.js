class Plugin1 {
  // 整个 编译生命周期都可以访问 compiler 对象 
  // 可以通过compiler在相应的钩子函数加上回调
  apply(compiler) {
    compiler.hooks.emit.tap("Plugin1", (compilation) => {
      console.log("emit.tap 111");
    });

    compiler.hooks.afterEmit.tap("Plugin1", (compilation) => {
      console.log("afterEmit.tap 111");
    })

    compiler.hooks.done.tap("Plugin1", (stats) => {
      console.log("done.tap 111");
    })
  }
}

module.exports = Plugin1;