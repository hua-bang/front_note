/**
 * 首先 理解new过程
 * 1. 新建一个空的对象
 * 2.将对象的__proto__指向prototype
 * 3.将函数的this和对象绑定在一起
 * 4.看函数的返回值 是否是原始值 是返回对象，否直接返回值
 */

/**
 * @param function fn
 * @param Array ...args
 */

function _new(fn, ...args) {
    let instance = Object.create(fn.prototype);
    fn.call(instance, ...args);
    let res = fn(...args);
    return typeof res === "object" ? res : instance; 
}

function User(name) {
    this.name = name
}

let u = _new(User, "hug");
console.log(u);