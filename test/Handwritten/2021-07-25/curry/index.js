function curry(fn) {
  return function curried(...arg1) {
    const context = this;
    if (arg1.length >= fn.length) {
      return fn.call(context, ...arg1);
    } else {
      return function (...arg2) {
        let arg = [...arg1, ...arg2];
        return curried.call(context, ...arg);
      }
    }
  }
}

function add(a, b, c) {
  return a + b + c;
}

let addCurr = curry(add);
console.log(addCurr(1)(2)(3));