let m = new Map();
let functionKey = () => {};

// the key can be any type of value
m.set(functionKey,"functionValue");
let anotherFunctionKey = functionKey;

// The variable address is the same, the anotherFunctionKey can get "functionValue"
console.log(m.get(functionKey));
console.log(m.get(anotherFunctionKey));
console.log(m.get(() => {}))

const objKey = {};
const objVal = {};
const arrKey = [];
const arrVal = [];

m.set(objKey,objVal);
m.set(arrKey,arrVal);
objVal.name = "objValue";
arrVal.push("arrVal");

// Although the value(key or value) changes, the mapping relationship does not change
console.log(m.get(objKey));
console.log(m.get(arrKey));

let a = NaN;
let b = NaN;

// why? SameValueZero
m.set(a,"NaN");
m.set(0,"zero");
console.log(a === b);   // false
console.log(m.get(b));  //NaN
console.log(m.get(-0));

