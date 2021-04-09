function curry(fn) {
    return function curried(...args) {
        let that = this;
        if(args.length >= fn.length) {
            return fn.call(that, ...args);
        }else {
            return function(...args2) {
                return curried.apply(that, args.concat(args2));
            }
        }
    }
}

function add(x, y) {
    return x + y; 
}

let addCurry = curry(add);
console.log(addCurry(1)(2));