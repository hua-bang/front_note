class HEventEmitter {
    constructor() {
        this.eventHandlerList = {};
    }

    on(eventName, fn = () => {}) {
        let eventHandler = this.eventHandlerList[eventName] || [];
        eventHandler.push(fn);
        this.eventHandlerList[eventName] = eventHandler;
    }

    emit(eventName, ...args) {
        let eventHandler = this.eventHandlerList[eventName] || [];
        eventHandler.forEach(fn => {
            fn(...args);
        })
    }
}

class Dog extends HEventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    bark() {
        console.log(this.name);
    }
}

let simon = new Dog("simon");
simon.on("bark", (target) => {
    target.bark();
})

setInterval(() => {
    simon.emit("bark", simon);
}, 500);