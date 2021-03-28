/**
 * 提供一个方法， 传入对象，以及修改的函数名，达到不影响原来的方法， 从而进行扩展
 */

function originDecorateFn(originTarget, originKey, fn) {
    let oldOrigin = originTarget[originKey];
    originTarget[originKey] = (...args) => {
        oldOrigin.call(this, ...args);
        fn.call(this, ...args);
    }
}

let a = {
    demo() {
        console.log(`method: old demo, args = ${arguments}`)
    }
}

a.demo();
originDecorateFn(a, "demo", (...args) => {
    console.log(`method: new demo, args = ${args}`)
})
a.demo(123,456);

export {originDecorateFn};