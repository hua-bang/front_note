const arr = [1, [2, [3, [4, 5]]], 6];

const flatten = arr => {
  return arr.reduce((prev, current) => {
    return prev.concat((Array.isArray(current) ? flatten(current) : current));
  }, []);
}

console.log(flatten(arr));