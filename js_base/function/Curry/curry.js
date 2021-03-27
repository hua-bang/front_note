function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.call(this, ...args);
        }else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

let a = curry(add);
console.log(a(1)(2));