/**
 * @author hug
 * @date 2021/3/10 16:01
 */

let p1 = new Promise((resolve, reject) => {
    resolve(1);
});

let p2 = new Promise((resolve, reject) => {
    reject(1);
});

// value: 1
p1.then(value => {
    console.log("value: " + value);
}, reason => {
    console.log("reason: "+reason);
})

// reason: 1
p2.then(value => {
    console.log("value: " + value);
}, reason => {
    console.log("reason: "+reason);
})
