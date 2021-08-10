// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

function missingNumber1(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};

function missingNumber(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};