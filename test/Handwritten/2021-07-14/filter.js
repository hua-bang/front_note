Array.prototype._filter = function (callback, context) {
  context = context ?? this;
  if (this == undefined) {
    throw new TypeError('this is null or not undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const res = [];
  const len = context.length;

  for (let i = 0; i < len; i++) {
    if (callback(context[i], i, context)) {
      res.push(context[i]);
    }
  }
  return res;
}


let arr = [1, 2, 3, 4, 5, 6, 7]._filter((v, k, arr) => {
  return v % 2 === 0;
}, [8, 9, 10, 11, 12, 13, 14, 15]);
console.log(arr);