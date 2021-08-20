function Person(obj) {
  function F() { }
  F.prototype = obj;
  return new F();
}

const friendship = {
  name: 'unamed',
  friends: ['Amy', 'Ben', 'Tom'],
};

let a = Person(friendship);
console.log(a.name);