function singleton(Target) {
  let instance;
  return function (...args) {
    if (instance) {
      return instance;
    } else {
      instance = new Target(...args);
      return instance;
    }
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let createSinglePerson = singleton(Person);
let a = createSinglePerson("hug", 18);
let b = createSinglePerson("hua", 19);
console.log(a);
console.log(b);
console.log(a === b);