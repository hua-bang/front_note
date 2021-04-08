class EventEmitter {
    constructor() {
        this.handle = {};
    }

    on(eventName, fn) {
        let fnArr = this.handle[eventName] || [];
        fnArr.push(fn);
        this.handle[eventName] = fnArr;
    }

    emit(eventName, ...args) {
        const that = this;
        let fnArr = this.handle[eventName];
        fnArr.forEach(fn => fn.call(that, ...args));
    }

    off(eventName, fn) {
        let fnArr = this.handle[eventName] || [];
        this.handle[eventName] = fnArr.filter(hFn => hFn != fn);
    }
}

let a = new EventEmitter();
let log = (res) => {
    console.log(res);
}
a.on("hello", log)
a.emit("hello", "world");

console.log(a);

a.off("hello", log);
console.log(a);
a.emit("hello", "world");