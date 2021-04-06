async function multi(num) {
    let res = await new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
    return res;
}

async function test() {
    let arr = [1,2,3];
    arr.forEach(async (n) => {
        let num = await multi(n);
        console.log(num);
    })
}

Array.prototype.asyncForEach = async function(callback) {
    for(let index = 0; index < this.length; index ++) {
        await callback(this[index], index, this);
    }
}

async function test2() {
    let arr = [1,2,3];
    arr.asyncForEach(async (val) => {
        let res = await multi(val);
        console.log(res);
    });
}



console.log("test");
test();
test2();