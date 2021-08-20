function creator(origin) {
  let clone = Object.create(origin);
  clone.sayHi = function () {
    console.log(this.name);
  }
  return clone;
}

let friendship = {
  name: 'Uzi',
  friends: ['Amy', 'Ben', 'Tom'],
};

let a = creator(friendship);
console.log(a.sayHi());