// https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/solution/jian-zhi-offer-60-n-ge-tou-zi-de-dian-sh-z36d/

function dicesProbability(n) {
  let dp = new Array(6).fill(1 / 6);
  if (n < 2) {
    return dp;
  }
  for (let i = 2; i <= n; i++) {
    let temp = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += dp[j] / 6;
      }
    }
    dp = temp;
  }
  return dp;
}


function dicesProbability(n) {
  let dp = new Array(6).fill(1 / 6);
  if (n < 2) {
    return dp;
  }
  for (let i = 2; i <= n; i++) {
    let temp = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += dp[j] / 6;
      }
    }
    dp = temp;
  }
  return dp;
}

console.log(dicesProbability(3));
