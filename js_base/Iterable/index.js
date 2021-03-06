/**
 * @author hug
 * @date 2021/3/6 11:46
 */
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    done: false,
                    value: "foo"
                }
            }
        }
    }
}

let foo = new Foo();
console.log(foo[Symbol.iterator]().next());
console.log(foo[Symbol.iterator]().next());
console.log(foo[Symbol.iterator]().next());

//pseudo code
// const ITERABLE = "迭代对象";
// $iterator = ITERABLE[Symbol.iterator];
// let $result = $iterator.next();
// while(!$result.done) {
//     let val = $result.value;
//     $result = $iterator.next();
// }
