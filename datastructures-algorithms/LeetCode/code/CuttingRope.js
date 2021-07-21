function cuttingRope(n) {
  if (n <= 3) {
    return n - 1;
  }
  let res = Math.floor(n / 3);
  let remainer = n % 3;
  if (remainer === 1) {
    return Math.pow(3, (res - 1)) * 4;
  } else if (remainer === 0) {
    return Math.pow(3, (res));
  } else {
    return Math.pow(3, (res)) * 2;
  }
}

console.log(cuttingRope(10));