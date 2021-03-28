class Math{
    @log
    static add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    // 记得保留value值
    let oldValue = descriptor.value;
    descriptor.value = (...args) => {
        console.log(`method: ${name}, args: ${args}`);
        return oldValue.call(this, ...args);
    }

    return descriptor;
}

console.log(Math.add(1,2));