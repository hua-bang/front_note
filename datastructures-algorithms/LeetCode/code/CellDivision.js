// 1 个细胞的生命周期是 3 小时，1 小时分裂一次。求 n 小时后，容器内有多少细胞？

function getCellSum(n, t) {
  let dp = [];
  dp[0] = n;
  for (let i = 1; i <= t; i++) {
    if (i < 3) {
      dp[i] = dp[i - 1] * 2;
    } else {
      dp[i] = dp[i - 1] * 2 - dp[i - 3];
    }
  }
  return dp[t];
}

console.log(getCellSum(1, 3));

function getCellSum(n, t) {
  if (t === 0) {
    return n;
  }
  if (t < 3) {
    return getCellSum(n, t - 1) * 2;
  }
  return getCellSum(n, t - 1) * 2 - getCellSum(n, t - 3);
}