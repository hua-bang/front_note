// 主题 保存状态 状态变化之后触发所有观察者对象
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    } 

    //通知所有
    notifyAllObservers() {
        this.observers.forEach((observer) => {
            observer.update();
        })
    }

    attach(observer) {
        this.observers.push(observer);
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        // 加入观察者队列
        this.subject.attach(this);
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`);
    }
}

let s = new Subject();
let o1 = new Observer("o1", s);
let o2 = new Observer("o2", s);
let o3 = new Observer("o3", s);
s.setState(1);
s.setState(2);


export default Subject;