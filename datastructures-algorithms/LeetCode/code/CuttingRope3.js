/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let m = Math.floor(n / 3);
  let j = n % 3;

  if (n < 3) {
    return n - 1;
  }

  if (j === 0) {
    return Math.pow(3, m);
  } else if (j === 1) {
    return Math.pow(3, m - 1) * 4;
  } else {

    return Math.floor(3, m) * 2;
  }

};

console.log(cuttingRope(2));