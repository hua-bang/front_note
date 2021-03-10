/**
 * @author hug
 * @date 2021/3/10 14:53
 */
function double(val, callback) {
    setTimeout(() => {
        callback && callback(val * 2);
    })
}

double(2,(val) => {
    console.log(val);
})
