class PubSub {
  constructor() {
    this.substribers = {};
  }

  on(type, fn) {
    this.substribers[type] = this.substribers[type] || [];
    this.substribers[type].push(fn);
  }

  off(type, fn) {
    let listeners = this.substribers[type];
    if (!listeners) {
      return;
    }
    this.substribers[type] = listeners.filter(v => v !== fn);
  }

  emit(type, ...args) {
    let listeners = this.substribers[type];
    if (!listeners) {
      return;
    }
    listeners.forEach(listener => {
      listener(...args);
    })
  }
}

let ob = new PubSub();
ob.on("test", () => {
  console.log("this is test");
});

ob.on("test", (a) => {
  console.log(`this argment a is ${a}`);
})

function log() {
  console.log("log");
}
ob.on("test", log)

ob.emit("test", 1);
ob.off("test", log);
ob.emit("test", 1);
