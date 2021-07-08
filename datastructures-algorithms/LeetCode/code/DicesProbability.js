// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/ozzl1r/

/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {

  const dp = [];
  dp[0] = 1 / (n ** 6);

  for(let i = 1; i < n * 6; i++) {
    dp[i] = dp[i - 1] + 1 / (n ** 6);
  }
  return dp;
};

console.log(dicesProbability(1));