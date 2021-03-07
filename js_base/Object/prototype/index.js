/**
 * @author hug
 * @date 2021/3/7 11:34
 */
function Person() {}
console.log(typeof  Person.prototype);
console.log(Person.prototype);

console.log(Person.prototype.constructor === Person) //true
console.log(Person.prototype.__proto__.constructor === Object); //true
console.log(Person.prototype.__proto__.__proto__ === null); //true

let person = new Person();
console.log(person.__proto__ === Person.prototype); //true
console.log(person.__proto__.constructor === Person); //true

