/**
 * @author hug
 * @date 2021/3/6 16:23
 */
function * generatorFn() {}
const g = generatorFn();
console.log(g.return(4));
// console.log(g);
console.log("=======")
function* numbers () {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
let gF = numbers();
console.log(gF.next())
console.log(gF.next())
console.log(gF.return(7));

