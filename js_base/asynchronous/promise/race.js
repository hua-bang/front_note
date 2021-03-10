/**
 * @author hug
 * @date 2021/3/10 20:01
 */
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("reject");
    },2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve");
    },3000)
})

Promise.race([p1,p2]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err);
})
