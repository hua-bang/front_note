/**
 * @author hug
 * @date 2021/3/10 20:33
 */
async function foo() {
    return "foo";
    // return Promise.resolve("foo");
}

async function objHasThen() {
    return {
        then(callback) {
            callback([2,9,10,40])
        }
    }
}

async function objNotHasThen() {
    return {
        a: 123
    }
}



foo().then(res => {
    console.log(res);
})

objHasThen().then(res => {
    console.log(...res);
})

objNotHasThen().then(res => {
    console.log(res);
});
