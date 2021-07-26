let numTable = new Array(26).fill(0);
numTable = numTable.map((v, k) => {
  return Math.pow(26, k);
});

function hash(str) {
  let num = 0;
  let m = str.length;
  for (let i = 0; i < m; i++) {
    num += (str[i].charCodeAt() - 97) * numTable[(m - i - 1)];
  }
  return num;
}

function rk(str, target) {
  let n = str.length;
  let m = target.length;
  if (n < m) {
    return -1;
  }
  let targetHashCode = hash(target);
  for (let i = 0; i < (n - m + 1); i++) {
    let subStr = str.substr(i, m);
    let subStrHashCode = hash(subStr);
    if (targetHashCode === subStrHashCode) {
      return i;
    }
  }
  return -1;
}

console.log(rk("abcdwdqwdq", "qwdq"));