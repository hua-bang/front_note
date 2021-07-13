Function.prototype._call = function (obj, ...args) {
  let fn = Symbol();
  obj[fn] = this;
  let res = obj[fn](...args);
  delete obj[fn];
  return res;
}

Function.prototype._apply = function (obj, args) {
  let fn = Symbol();
  obj[fn] = this;
  let res = obj[fn](...args);
  delete obj[fn];
  return res;
}

Function.prototype._bind = function (obj, ...args1) {
  const that = this;
  return function (...args2) {
    let args = [...args1, ...args2];
    return that.call(obj, ...args);
  }
}

function test(b, c) {
  console.log(this.a);
  console.log(b,c);
}

let obj = {
  a: 2
}

test._call(obj, 4, 5);
test._apply(obj, [1, 2]);
let test2 = test.bind(obj, 7);
test2(8);