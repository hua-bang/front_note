function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        }else {
            return function(...args2) {
                return curried.apply(this, args2);
            }
        }
    }
}

let logCurry = curry(log);

logCurry(new Date())("ERROR")("测试");