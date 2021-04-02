#### Observer(观察者模式)

介绍：

- 发布&订阅
- 一对多
- 当对象属于一对多关系时，使用观察者模式。比如，当一个对象被修改时，自动通知依赖他的对象

uml类图

![image-20210402091205485](F:\github\js_note\DesignMode\DesignMode\Observer\image-20210402091205485.png)

```js
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
```

场景：

- 网页事件绑定

- Promise

- jQuery callbacks

- nodejs自定义事件

  - 代码

    ```js
    const emitter = new EventEmitter();
    
    // 监听 some 事件
    emitter.on('some', info => {
        console.log(info);
    })
    
    emitter.emit("some", "hug");
    ```

    