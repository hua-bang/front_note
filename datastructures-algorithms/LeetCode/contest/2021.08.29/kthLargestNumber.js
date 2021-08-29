/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  nums = nums.map(num => BigInt(num));
  nums.sort((b, a) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
  return nums[k - 1];
};

let nums = ["3", "6", "7", "10"], k = 4