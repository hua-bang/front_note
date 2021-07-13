function deepClone(target) {

  let instance = target instanceof Array ? [] : {};

  for (let key in target) {
    instance[key] = typeof target[key] === "object" ? deepClone(target[key]) : target[key];
  }

  return instance;
}

let a = {
    b:1,
    c:2
};
let b = deepClone(a);
b.b = 2
console.log(a,b);

let c = [1,2,3];
d = deepClone(c);
d.push(3);
console.log(c,d);