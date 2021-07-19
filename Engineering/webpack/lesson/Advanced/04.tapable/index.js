const {
	SyncHook,
	SyncBailHook,
	AsyncParallelHook,
	AsyncSeriesHook,
} = require("tapable");
 
class Lesson {
  constructor() {
    this.hooks = {
      go: new SyncBailHook(["address"]),
      leave: new AsyncParallelHook(["name","age"])
    }
  }
  tap() {
    // 注册事件
    this.hooks.go.tap("class0318", (address) => {
      console.log(address);
      return 111;
    });
    this.hooks.go.tap("class0418", (address) => {
      console.log(address);
    });

    this.hooks.leave.tapAsync("class0510", (name, age, cb) => {
      setTimeout(() => {
        console.log("class0510", name, age);
        cb();
      }, 1000);
    });

    this.hooks.leave.tapPromise("class0610", (name, age) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("class0610-1", name, age);
          resolve();
        }, 500);
      })
    });
  }

  start() {
    // 触发钩子
    this.hooks.go.call("c318");
    this.hooks.leave.callAsync("jack", 18, () => {
      console.log("end");
    });
  }
}

let lesson = new Lesson();
lesson.tap();
lesson.start();