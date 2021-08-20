function Parent(name) {
  console.log("parent");
  this.name = name;
}

Parent.prototype.sayHi = function() {
  console.log(this.name);
}

function Child(name) {
  Parent.call(this, name);
}

Child.prototype = new Parent;
Child.prototype.constructor = Child;

let c = new Child("hug");
c.sayHi();