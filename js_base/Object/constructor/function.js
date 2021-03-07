/**
 * @author hug
 * @date 2021/3/7 10:56
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.say = () => {
        console.log(this.name);
    }
    this.getJob = getJob
}
let getJob = function () {
    return this.job;
}

let p = new Person("hug","18","basketball");
console.log(p);
p.say();

let p2 = new Person("hug","18","basketball");
console.log(p.say === p2.say);  //不同实例
console.log(p.getJob === p2.getJob);    //同一个实例
console.log(p2.getJob());


