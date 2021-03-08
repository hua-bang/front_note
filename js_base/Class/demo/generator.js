/**
 * @author hug
 * @date 2021/3/8 11:05
 */
class Person {

    constructor() {
        this.arr = [1,2,3,4];
    }

    static * createJob() {
        yield * [1,2,3];
    }

    *[Symbol.iterator] () {
        yield* this.arr;
    }
}

let g = Person.createJob()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

let p = new Person();
for (const person of p) {
    console.log(person);
}
