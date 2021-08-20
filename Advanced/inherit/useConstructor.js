function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this, name);
}
Child.prototype.sayHi = function() {
  console.log("child hi");
  console.log(this.name);
}

Parent.prototype.sayPHi = () => {
  console.log("parent hi");
  console.log(this.name);
}

let a = new Child("123");
a.sayHi();
// a.sayPHi();


