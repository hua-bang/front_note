/**
 * @author hug
 * @date 2021/3/10 15:43
 */
let p1 = new Promise((resolve) => {
    resolve();
})

let p2 = Promise.resolve();

setTimeout(console.log,0,Promise.resolve(3));

let p = new Promise(() => {});
setTimeout(console.log,0,p === Promise.resolve(p));
