function curry(fn) {
  return function curried(...args) {
    const context = this;
    let length = fn.length;
    if (args.length >= length) {
      return fn.call(context, ...args);
    } else {
      return function (...args2) {
        let allArgs = [...args, ...args2];
        return curried(...allArgs);
      }
    }
  };
}

function add(a,b) {
  return a + b;
}

let addCurry = curry(add);
let addOne = addCurry(1);
console.log(addOne(2));
console.log(addOne(3));
console.log(addCurry(1)(2));
console.log(addCurry(1, 2));