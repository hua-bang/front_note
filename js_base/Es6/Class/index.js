/**
 * @author hug
 * @date 2021/3/6 9:52
 */
/**
 * 构造函数写法
 * @param name
 * @param age
 * @param sex
 * @constructor
 */
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.say = function () {
        console.log(this.name);
    }
}
let p = new Person("hug",18,"男");
console.log(p);
p.say();

/**
 * class引入
 */
class Student {
    constructor(name,sex,age) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    say() {
        console.log(this);
    }
}

class Graduate extends Student {
    constructor(name,age,sex) {
        super(name,age,sex);
    }
}
let stu = new Student("hug",1,18);
stu.say();
