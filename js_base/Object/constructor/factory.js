/**
 * Note: 工厂模式
 * @author hug
 * @date 2021/3/7 10:53
 */

function createPerson(name, age, job) {
    let person = {
        name,
        age,
        job,
        sayName() {
            console.log(this.name);
        }
    }
    return person;
}

let a = createPerson("hug","18","basketball");
console.log(a);
a.sayName();
