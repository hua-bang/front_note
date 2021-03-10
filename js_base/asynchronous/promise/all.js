/**
 * @author hug
 * @date 2021/3/10 19:49
 */
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
        reject("p1");
    },3000)
})

let p2 = new Promise((resolve, reject) => {
    resolve("p2");
    // reject("p2");
})

// 一个失败 整体失败 会触发catch
// 全部成功 触发then
// then res 返回的是个promise成功时的返回值集合
// catch 返回第一个失败
Promise.all([p1,p2]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
