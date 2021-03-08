/**
 * @author hug
 * @date 2021/3/8 10:42
 */
class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getAge = () => {
            return this.age;
        }
    }

    getName() {
        return this.name;
    }
}

let user1 = new User("hug");
let user2 = new User("hug",20);
console.log(user2.getAge());
console.log(user1.getName === user2.getName);   //true
console.log(user2.getAge === user1.getAge); //false
