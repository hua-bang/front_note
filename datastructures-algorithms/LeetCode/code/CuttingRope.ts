var cuttingRope = function (n) {
  if (n <= 3) {
    return n - 1;
  }
  let res = 1;
  while (n > 3) {
    res *= 3;
    n -= 3
  }

  if (n === 0) {
    return res;
  }

  if (n === 1) {
    res = res / 3 * 4;
  } else {
    res = res * n;
  }
  return res;
};