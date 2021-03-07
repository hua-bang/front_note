/**
 * @author hug
 * @date 2021/3/7 12:17
 */
function Person() {}
let p = new Person();
Person.prototype.say = () => {
    console.log("hi");
}

p.say();

let p2 = new Person();
Person.prototype = {
    constructor: Person,
    eat() {
        console.log("eat");
    }
}
p2.eat();

//可以看出重写构造函数上的原型再创建的实例才会引用新的原型，之前创建的实例仍然会应用旧的原型
