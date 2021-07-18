Array.prototype._map = function (callback, context) {
  context = context ?? this;
  let arr = [];

  for (let i = 0; i < context.length; i++) {
    let res = callback(context[i], i, context);
    arr.push(res);
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7]._map((v) => v * 2);
console.log(arr);