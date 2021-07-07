// 思路： 动态规划

// 初始条件 dp[0] = 1, dp[1] = 2
// dp[i] = dp[i-1] + dp[i-2];


/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) {
    return 1;
  }
  const dp = [1, 2];

  if (n <= 2) {
    return dp[n - 1];
  }

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i-2]) % 1000000007;
  }

  return dp[n - 1];
};

console.log(numWays(7));