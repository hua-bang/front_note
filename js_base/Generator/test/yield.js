/**
 * @author hug
 * @date 2021/3/6 15:05
 */
function* generatorFn() {
    yield;
}

let generatorObject = generatorFn();
console.log(generatorObject.next());
console.log(generatorObject.next());

function* generatorFn1() {
    yield 1;
    yield 2;
    return "baz";
}

let generatorFn1Object = generatorFn1();
// console.log(generatorFn1Object.next()); //每个next都回去看有无yield
// console.log(generatorFn1Object.next());
for (const number of generatorFn1Object) {
    console.log(number)
}

function * generatorFn2(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}

let generatorFn2Object = generatorFn2("foo");
generatorFn2Object.next("bar");
generatorFn2Object.next("baz");
generatorFn2Object.next("qux");

function * generatorFn3() {
    return yield 'foo';     //必须对整个表达式求值了才能返回，遇到yield关键字时暂停执行并计算出产生的值，下一次调用next传入bar,作为交给同一个yield的值 这个值作为本次生成函数要返回的值
}
let generatorFn3Object = generatorFn3();
console.log(generatorFn3Object.next());
console.log(generatorFn3Object.next("bar"));

function* generatorFn4(){
    yield * [1,2,3];    //多次yield简写
}

let generatorFn4Object = generatorFn4();
console.log(generatorFn4Object.next());
console.log(generatorFn4Object.next());
console.log(generatorFn4Object.next());
