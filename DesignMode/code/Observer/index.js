class Observer{
    constructor(name, subscribe) {
        this.name = name;
        this.subscribe = subscribe;
        this.subscribe.addObserver(this);
    }

    update() {
        console.log(`my name is ${this.name}, update...`);
    }
}

class Subscribe {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        this.observers.forEach((observers) => {
            observers.update();
        });
    }
}
let sub = new Subscribe();
let a = new Observer("a", sub);
let b = new Observer("b", sub);
sub.notifyAll();