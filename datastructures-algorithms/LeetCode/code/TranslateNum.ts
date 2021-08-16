function translateNum(num: number): number {
  const dp = [];
  const numStr = num.toString();
  dp[0] = 1;
  if (+numStr[0] === 1 || (+numStr[0] === 2 && +numStr[1] < 6)) {
    dp[1] = dp[0] + 1;
  } else {
    dp[1] = dp[0];
  }
  for (let i = 2; i < numStr.length; i++) {
    if (+numStr[i - 1] === 1 || (+numStr[i - 1] === 2 && +numStr[i] < 6)) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[numStr.length - 1];
};

console.log(translateNum(12258));