function minCoins(money) {
  let coin;
  if (money <= 0) {
    return 0;
  }
  if ([1, 3, 5].includes(money)) {
    return 1;
  }
  if ([2, 4].includes(money)) {
    return 2;
  }

  coin = 1 + Math.min(minCoins(money - 1), minCoins(money - 3), minCoins(money - 5));
  return coin;
}

console.log(minCoinsDP(10));

function minCoinsDP(money) {
  let dp = [1, 2, 1, 2, 1];
  for (let i = 5; i < money; i++) {
    dp[i] = 1 + Math.min(dp[i - 1], dp[i - 3], dp[i - 5]);
  }
  return dp[money - 1];
}

