/**
 * @author hug
 * @date 2021/3/6 17:36
 */

function * main() {
    let result = yield request("url");
    return JSON.parse(result);
}

function request(url) {
    ajax(url,(res) => {
        it.next(res)
    })
}

let it = main();
it.next();
