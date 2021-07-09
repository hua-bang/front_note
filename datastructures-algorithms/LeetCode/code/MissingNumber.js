// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/58iqo5/

var missingNumber = function(nums) {
  
  if (nums[0] !== 0) {
    return 0;
  }

  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === mid) {
      left = mid + 1;
    }
    if (nums[mid] !== mid) {
      right = mid;
    }
  }

  return left;
};