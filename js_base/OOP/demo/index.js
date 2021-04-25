function Fn(x, y) {
    let sum = 10;
    this.total = x + y;
    this.say = function() {
        console.log(`say: ${this.total}`)
    }
}

let res = Fn(10, 20);   //普通函数执行
let f1 = new Fn(10, 20);    //构造函数
f1.say();