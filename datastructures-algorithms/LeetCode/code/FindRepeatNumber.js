// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/59bjss/

// 空间O(n)
// 时间O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i]
    }
    map[nums[i]] = true;
  }

};