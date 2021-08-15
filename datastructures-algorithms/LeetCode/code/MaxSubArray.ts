function maxSubArray(nums: number[]): number {
  const dp = [];
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] > 0 ? (dp[i - 1] + nums[i]) : nums[i];
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return max;
};