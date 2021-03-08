/**
 * @author hug
 * @date 2021/3/8 8:33
 */

// 原型链
function SuperType() {}
SuperType.prototype.name = "hug";
SuperType.prototype.arr = [1];
function SubType() {}
SubType.prototype = new SuperType();
let a = new SubType();
a.arr.push(2);
console.log(a.name);

let b = new SubType();
b.name = "123";
console.log(a.name, b.name);
console.log(b.arr);
