/**
 * @author hug
 * @date 2021/3/6 17:39
 */
step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});

Promise.resolve(step1)
    .then(step2)
    .then(step3)
    .then(step4)
    .then((value4) => {

    })


function* longRunningTask(value1) {
    try{
        let value2 = yield step1(value1)
        let value3 = yield step2(value2)
        let value4 = yield step3(value3)
        let value5 = yield step4(value4)
    }catch (err){

    }
}

function scheduler(task) {
    let taskObj = task.next(task.value);
    // 如果Generator函数未结束，就继续调用
    if (!taskObj.done) {
        task.value = taskObj.value
        scheduler(task);
    }
}
