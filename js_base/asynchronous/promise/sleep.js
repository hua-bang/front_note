/**
 * @author hug
 * @date 2021/3/10 21:07
 */
async function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        },time);
    })
}

async function foo() {
    let time = Date.now();
    await sleep(2000);
    console.log(Date.now()-time);
}
foo()
