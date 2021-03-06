/**
 * @author hug
 * @date 2021/3/6 16:03
 */
function * counter() {
    for (let i = 0;;i++) {
        yield i;
    }
}

let count = counter();
console.log(count.next())
console.log(count.next())
