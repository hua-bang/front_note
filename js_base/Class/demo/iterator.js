/**
 * @author hug
 * @date 2021/3/8 11:08
 */
class Person {
    constructor() {
        this.nickNames = ["hug","jack","event"];
    }

    *[Symbol.iterator]() {
        yield* this.nickNames.entries();
    }
}

let p = new Person();
for (const person of p) {
    console.log(person);
}
