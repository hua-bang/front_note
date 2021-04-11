function partial(fn, ...prevArgs) {
    return function (...args) {
        return fn.call(this, ...[...prevArgs, ...args]);
    }
}

function log(a, b, c) {
    console.log(`${a} ${b} ${c}`);
}

let partialLog = partial(log, "1", "2");
partialLog(3);
partialLog(5);