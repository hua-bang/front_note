/**
 * @author hug
 * @date 2021/3/10 15:28
 */
let p1 = new Promise((resolve, reject) => {
    resolve();
})
// setTimeout(console.log,0,p1);   //Promise <resolved>

let p2 = new Promise((resolve, reject) => {
    reject("1")
})
// setTimeout(console.log,0,p2);   //Promise <rejected>


let p = new Promise((resolve, reject) => {
    setTimeout(reject,10000);
});

setTimeout(console.log,0,p);    // pending
setTimeout(console.log,11000,p); //rejected
