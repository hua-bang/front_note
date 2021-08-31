function mult(...args) {
  return args.reduce((prev, curr) => prev * curr);
}

function add(...args) {
  console.log("add");
  return args.reduce((prev, curr) => prev + curr);
}

// let multProxy = (function () {
//   let cache = {};
//   return function (...args) {
//     let context = this;
//     let key = args.join(",");
//     if (cache[key]) {
//       return cache[key];
//     }
//     cache[key] = mult.call(context, ...args);
//     return cache[key];
//   }
// })();

function createProxyFactory(fn) {
  let caches = {};
  return function (...args) {
    const context = this;
    let key = args.join(",");
    if (caches[key]) {
      return caches[key];
    }
    caches[key] = fn.call(context, ...args);
    return caches[key];
  }
}

let multProxy = createProxyFactory(mult);
let addProxy = createProxyFactory(add);

console.log(multProxy(1, 2, 3));
console.log(multProxy(1, 2, 3));  

console.log(addProxy(1, 2, 10));
console.log(addProxy(1, 2, 10));