/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  const nums = new Array(n + 1);
  nums[0] = 0;
  nums[1] = 1;
  let max = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[i >> 1];
    } else {
      nums[i] = nums[i >> 1] + nums[(i >> 1) + 1];
    }
    max = max > nums[i] ? max : nums[i];
  }
  return max;
};

let max = getMaximumGenerated(3);
console.log(max);