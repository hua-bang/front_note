/**
 * @author hug
 * @date 2021/3/6 14:11
 */
let iterable = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (const iterableElement of iterable) {
    console.log(iterableElement)
}
