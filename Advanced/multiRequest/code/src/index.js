import axios from "axios";

const request = axios.create({
    timeout: 5000
});


// 串行
request.get("/api/data.php")
    .then(res => {
        console.log(`1-----`, res)
        request.get("/api/data.php")
            .then(r => {
                console.log(`2-----`, r)
            })
    });


// 并行
const r1 = () => request.get("/api/data.php");

Promise.all([r1(), r1()])
    .then(res => {
        console.log(`promise_all`);
        console.log(res);
    }).catch(err => {
        console.log(err)
    });


function multiRequest(promiseArr, maxNum) {

    // 总请求数目
    const len =  promiseArr.length;

    // 根据请求数目量保存结果
    const result = new Array(len).fill(false);

    // 已经完成的数目
    let count = 0;

    return new Promise((resolve, reject) => {

        // 执行maxNum个任务
        while (count < maxNum) {
            next();
        }

        function next() {
            let current = count++;

            // 当前执行的任务大于任务长度时
            if (current >= len) {
                !result.includes(false) && resolve(result);
                return;
            }

            // 获取对应的promise 请求任务
            const p = promiseArr[current];
            console.log(`第${current}个请求开始`, new Date().toLocaleString());

            p().then(res => {
                result[current] = res;
                console.log(`第${current}个请求完成`, new Date().toLocaleString(), res);
                // 未完成 递归
                if (current < len) {
                    next();
                }
            }).catch(err => {
                
                // 未完成 递归
                result[current] = err;
                console.log(`第${current}个请求出错`, new Date().toLocaleString());
                // 未完成 递归
                if (current < len) {
                    next();
                }
            })
        }
    });
}

const promiseArr = new Array(20).fill(() => r1());
multiRequest(promiseArr, 10).then(res => {
    console.log(res);
})