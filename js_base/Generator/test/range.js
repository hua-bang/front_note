/**
 * @author hug
 * @date 2021/3/6 16:05
 */
function *range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (const x of range(3,10)) {
    console.log(x);
}
console.log(Array.from(range(1,10)));
