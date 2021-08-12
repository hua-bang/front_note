function removeDuplicates(nums: number[]): number {
  let slow = 0, fast = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      nums[++slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};