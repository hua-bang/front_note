// let event = new EventEmitter();
// event.on(eventName, () => {});
// event.emit(eventName)

// 思路：1. 需要存放 事件名，以及对应的函数 键/值对 存
//      2. 一个事件可能对应多个函数 键/值对 值为数组， 存放事件的函数
//      3. on的时候，将函数添加到对应的数组中
//      4. emit的时候, 找到对应的数组 遍历调用函数
//      5. off 只能取消声明的函数，不能取消匿名函数

class EventEmitter{
    constructor() {
        this.handlers = {};
    }

    on(eventName, fn = () => {}) {
        let handlers = this.handlers[eventName] ?? [];
        handlers.push(fn);
        this.handlers[eventName] = handlers;
    }

    emit(eventName, ...args) {
        const _this = this;
        let handlers = this.handlers[eventName] || [];
        handlers.forEach(handler => {
            handler.apply(_this, ...args);
        });
    }

    off(eventName, fn) {
        let handlers = this.handlers[eventName] || [];
        let index = handlers.findIndex(handler => handler === fn);
        handlers.splice(index, 1);
    }

    offAllHandlersByEventName(eventName) {
        this.handlers[eventName] = [];
    }

    offAllHandlers() {
        this.handlers = {};
    }
}

let eventEmitter = new EventEmitter();
eventEmitter.on("test", () => {
    console.log("test1");
})
let test2 = () => {
    console.log("test2");
}
eventEmitter.on("test", test2);
eventEmitter.offAllHandlers();
eventEmitter.emit("test");
// eventEmitter.off("test", test2);
// eventEmitter.emit("test");
// eventEmitter.offAllHandlersByEventName("test");
// eventEmitter.emit("test");