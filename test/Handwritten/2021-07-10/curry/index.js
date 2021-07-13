function curry(fn) {
  return function curried(...args1) {
    const context = this;

    if (args1.length >= fn.length) {
      return fn.call(context, ...args1);
    } else {
      return function (...args2) {
        const args = [...args1, ...args2];
        return curried.call(context, ...args);
      }
    }
  }
}

function add(a, b) {
  return a + b;
}

const addCurry = curry(add);
console.log(addCurry(2)(3));