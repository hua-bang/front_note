/**
 * @author hug
 * @date 2021/3/10 20:08
 */
let addTwo = (val) => val + 2;
let addThree = (val) => val + 3;
let addFive = (val) => val + 5;

function compose(...fns) {
    return (x) => fns.reduce((promise, fn) => {
        return promise.then(fn)
    }, Promise.resolve(x));
}

let addTen = compose(addTwo,addThree,addFive);
addTen(2).then(res => {
    console.log(res);
})

async function addTenAsync(x) {
    for (const fn of [addTwo, addThree, addFive]) {
        x = await fn(x);
    }
    return x;
}

addTenAsync(10).then(res => {
    console.log(res);
})

function composeAsync(...fns) {
    return async (x) => {
        for (const fn of fns) {
            x = await fn(x);
        }
        return x;
    }
}

let addTenAsyncByCompose = composeAsync(addTwo, addThree, addFive);
addTenAsyncByCompose(10).then(res => {
    console.log(res);
})
