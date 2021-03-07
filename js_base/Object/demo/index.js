/**
 * @author hug
 * @date 2021/3/7 9:52
 */
let person1 = new Object();  //{}
person1.name = "hug";

let person2 = {
    name: "hug"
}
console.log(person1, person2);

let person = {};
Object.defineProperty(person,"name", {
    value: "hug"
})
person.name = "hua";
console.log(Object.getOwnPropertyDescriptor(person,"name"));
