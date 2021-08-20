function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHi = () => {
  console.log("hi");
}

function Child() {
  
}
Child.prototype = new Parent();

let a = new Child();
a.sayHi();
