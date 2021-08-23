/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let min = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    min = min < nums[i] ? min : nums[i];
    max = max > nums[i] ? max : nums[i];
  }
  return gcd(max, min);
};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log(findGCD([2, 5, 6, 9, 10]));