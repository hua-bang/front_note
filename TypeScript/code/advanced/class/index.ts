class Animal {
  public name: string;
  private age: number;

  constructor() {
    this.name = "hug";
    this.age = 18;
  }
}

let a = new Animal();
console.log(a.name);
// console.log(a.age);