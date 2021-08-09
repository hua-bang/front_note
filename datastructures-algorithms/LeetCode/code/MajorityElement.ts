function majorityElement(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  let count = 1, num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
    } else {
      count--;
      if (count === 0) {
        count = 1;
        num = nums[i];
      }
    }
  }
  return num;
};