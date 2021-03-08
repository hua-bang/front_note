/**
 * @author hug
 * @date 2021/3/8 11:01
 */
class Person {
    constructor(age) {
        this.age = age;
    }

    static create() {
        return new Person( parseInt(Math.random()*99)+1)
    }
}

let a = Person.create();
console.log(a);
