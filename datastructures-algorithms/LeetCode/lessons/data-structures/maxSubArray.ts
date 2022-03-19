function maxSubArray(nums: number[]): number {
  let max = nums[0], curr = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if (curr <= 0) {
      curr = nums[i];
    } else {
      curr = nums[i] + curr;
    }
    max = curr > max ? curr : max;
  }
  return max;
};