function curry(fn) {
    return function(a) {
        return function(b) {
            return fn.call(this, a, b);
        }
    }
}

function add(x, y) {
    return x + y;
}

function curryAdd(x) {
    return function(y) {
        return add(x, y);
    }
}

let curryAddDemo = curry(add);
console.log (curryAddDemo(2)(3));
console.log(curryAdd(2)(3));