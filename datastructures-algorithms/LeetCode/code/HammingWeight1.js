/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      count++;
    }
  }
  return count;
};