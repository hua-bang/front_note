/**
 * @author hug
 * @date 2021/3/8 9:09
 */

// 组合继承 盗用构造函数 + 原型链
function SuperType(name) {
    this.name = name;
    this.arr = [1, 2, 3];
}

SuperType.prototype.getName = function () {
    return this.name;
}

function SubType(name) {
    SuperType.call(this, name);
}

SubType.prototype = new SuperType();

let instance = new SubType("hug");
console.log(instance);
console.log(instance.getName());
console.log(instance);
console.log(instance.__proto__);
