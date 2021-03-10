/**
 * @author hug
 * @date 2021/3/10 21:15
 */

async function randomDelay(id) {
    const delay = Math.random() * 1000;
    return new Promise((resolve) => setTimeout(() => {
        console.log(`${id} - finished`);
        resolve();
    },delay))
}

async function foo() {
    for (let i = 0; i < 5; i++) {
        await randomDelay(i);
    }
}

async function bar() {
    const promiseArr = Array(5).fill(null).map((v, k) => randomDelay(k));
    for (const promiseArrElement of promiseArr) {
        await promiseArrElement;
    }
}

// foo();
bar();
