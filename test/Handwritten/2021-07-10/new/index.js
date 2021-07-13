/**
 * 1. 新建对象
 * 2. 对象的__proto__ = Fn.prototype;
 * 3. 函数调用，对象作为this传入
 * 4. 函数返回值 如果返回值为对象 则 直接放回
 * 5. 否则， 返回新建对象
 * @param {*} Fn 
 * @returns obj 
 */

function _new(Fn, ...args) {
  let instance = {};
  instance.__proto__ = Fn.prototype;
  let res = Fn.call(instance, ...args);
  return typeof res === "object" ? res : instance;
}

function A(a) {
  this.a = a;
  return {
    a: 0
  }
}

let a = new A(123);
console.log(a.a);