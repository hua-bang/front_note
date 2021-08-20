function inherit(child, parent) {
  let prototype = Object.create(parent.prototype);
  prototype.contructor = child;
  child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.num = [0, 1, 2];
}

Parent.prototype.sayName = function () {
  alert(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inherit(Child, Parent);

Child.prototype.sayAge = function () {
  console.log(this.age);
};