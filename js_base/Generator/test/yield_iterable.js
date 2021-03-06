/**
 * @author hug
 * @date 2021/3/6 16:20
 */
class Foo {
    constructor() {
        this.value = [1,2,3];
    }
    * [Symbol.iterator]() {
        yield * this.value
    }
}

let foo = new Foo();
for (const fooElement of foo) {
    console.log(fooElement);
}
