/**
 * @author hug
 * @date 2021/3/8 8:53
 */

// 盗用构造函数
function SuperType(name) {
    this.name = name;
    this.arr = [1,2,3];
}

function SubType(name) {
    SuperType.call(this,name);
}

SubType.prototype = new SuperType();

let instance1 = new SubType("hug");
let instance2 = new SubType("hua");
instance1.arr.push(4);
console.log(instance1.arr, instance2.arr);
console.log(instance1.name, instance2.name);
console.log(instance1, instance2);
