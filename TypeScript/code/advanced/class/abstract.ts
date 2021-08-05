abstract class People {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Student extends People {
  sayHi() {
    console.log(this.name);
  }
}

let p = new Student('Jack');
p.sayHi();
