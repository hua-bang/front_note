class EventEmitter {
  constructor() {
    this.handle = {};
  }

  on(eventName, fn) {
    if (!this.handle[eventName]) {
      this.handle[eventName] = [fn];
    } else {
      this.handle[eventName].push(fn);
    }
  }

  emit(eventName, ...args) {
    let handleArr = this.handle[eventName];

    if (!handleArr) {
      throw new Error(`you don't register the ${eventName} handler`)
    }

    handleArr.forEach(handle => {
      handle(...args);
    });
  }

  removeEventByName(eventName) {
    this.handle[eventName] = null;
  }
}

let eventEmitter = new EventEmitter();

eventEmitter.on("test", () => {
  console.log("test1");
});

eventEmitter.on("test", () => {
  console.log("test2");
});

eventEmitter.emit("test");
eventEmitter.removeEventByName("test");
eventEmitter.emit("test");
console.log("3");