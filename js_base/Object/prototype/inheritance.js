/**
 * @author hug
 * @date 2021/3/8 10:04
 */
function object(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

function inheritance(subType, superType) {
    let prototype = object(superType.prototype);    //得到的是一个实例得到的一个SuperType的对象
    prototype.constructor = subType;    // 这个对象作为原型 constructor
    subType.prototype = prototype;  // 改变subType的prototype的指向
}

function SuperType(name,age) {
    this.name = name;
    this.age = age;
}

function SubType(name,age) {
    SuperType.call(this,name,age);
}

inheritance(SubType,SuperType);
SubType.prototype.sayName = function () {
    console.log(this.name);
}

let a = new SubType("hug",18);
console.log(a);
console.log(a.__proto__);
a.sayName();
