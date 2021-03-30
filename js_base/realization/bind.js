/**
 * 思路：1. 首先 返回值是一个函数
 *      2. 函数的this指向是一个对象
 * 
 * 流程：1. 先保存原来的函数
 *      2. 总体上返回一个函数
 *      3. 函数内部可以用call或apply改fn的指向
 *      4. 调用函数 记得返回值
 */

Function.prototype._bind = function(target) {
    let fn = this;
    return function (...args) {
        let result = fn.call(target, ...args);
        return result;
    }
}

let obj = {
    name: "hug"
}

function getName() {
    return this.name;
}

console.log(getName._bind(obj)());