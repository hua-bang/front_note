/**
 * @author hug
 * @date 2021/3/8 11:22
 */
class Person {
    eat() {
        console.log("eat");
    }
}

class Stu extends Person {
    constructor() {
        super();
        super.eat();
        console.log(new.target.__proto__)
        // return {}
        // 派生类显示定义构造函数，要么调用super 要么return对象
    }
}

let stu = new Stu();
