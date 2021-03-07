/**
 * @author hug
 * @date 2021/3/7 11:20
 */
function Person() {

}
Person.prototype.name = "hua";
Person.prototype.say = function () {
    console.log(this.name);
};
let p = new Person();
p.say();
