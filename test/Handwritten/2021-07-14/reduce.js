Array.prototype._reduce = function (callback, initVal) {
  let context = this;
  let i = 0;
  let accumulator = initVal;
  if (!initVal) {
    accumulator = this[0];
    i = 1
  }
  
  for (;i < context.length; i++) {
    accumulator = callback(accumulator, context[i], i, context);
  }

  return accumulator;
}

let res = [1, 2, 3, 4, 5, 6]._reduce((prev, curr) => prev + curr);
console.log(res);