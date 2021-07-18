console.log("hello, loader");

class People {
  constructor(name) {
    this.name = name;
  }

  displayName() {
    console.log(this.name);
  }
}

let p = new People("hug");
p.displayName();