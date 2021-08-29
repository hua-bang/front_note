function majorityElement(nums: number[]): number {
  if (nums.length <= 2) {
    return nums[0];
  }
  let number = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === number) {
      count++;
    } else {
      if (count === 0) {
        number = nums[i];
        count = 1;
      } else {
        count--;
      }
    }
  }
  return number;
};