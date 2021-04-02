const EventEmitter = require("events").EventEmitter;

// const emitter = new EventEmitter();

// // 监听 some 事件
// emitter.on('some', info => {
//     console.log(info);
// })

// emitter.emit("some", "hug");

class Dog extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let simmon = new Dog("simmon");
simmon.on("bark", (target) => {
    console.log(target.getName());
})
simmon.emit("bark", simmon);