/**
 * @author hug
 * @date 2021/3/10 20:44
 */
async function demo() {
    let p = new Promise(resolve => {
        resolve(123);
    });
    let res = await p;
    console.log(res);
    return 1;
}

demo().then(v => {
    console.log(v);
});
