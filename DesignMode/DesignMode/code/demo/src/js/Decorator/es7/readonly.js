/**
 * 
 * @param {*} target 类的原型对象
 * @param {*} name 修饰的属性名
 * @param {*} descriptor 该属性的描述对象 value, enumerable, configurable, writable
 */
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Person {
    constructor(name) {
        this.name = name;
    }

    @readonly
    getName() {
        return this.name;
    }
}

let p = new Person("hug");
console.log(p.getName());
Person.getName = () => {
    return "name";
}
console.log(p.getName());   
