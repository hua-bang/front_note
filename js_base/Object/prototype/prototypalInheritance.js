/**
 * @author hug
 * @date 2021/3/8 9:21
 */

// 原型式继承
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let person = {
    name: "hug",
    arr: [1,2,3]
}

let stu = object(person);
console.log(stu);
console.log(stu.name);
stu.name = "stu";
stu.arr.push(4);
console.log(stu.name,person.name);
console.log(stu.arr, person.arr);
