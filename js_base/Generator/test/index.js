/**
 * @author hug
 * @date 2021/3/6 14:48
 */
function * generator() {
    console.log("foo");
    return "foo";
}

let generatorObject = generator();
console.log(generatorObject);
console.log(generatorObject.next());

const g = generator();
console.log(g === g[Symbol.iterator]());    //true 证明自引用
