() => {
  function tribonacci(n: number): number {
    const dp: number[] = new Array(n);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
    return dp[n];
  };
}

function tribonacci(n: number): number {
  let x = 0, y = 1, z = 1;
  if (n === 0) {
    return x;
  }
  if (n === 1 || n === 2) {
    return y;
  }
  let res: number = 2;
  for (let i = 3; i <= n; i++) {
    res = x + y + z;
    x = y;
    y = z;
    z = res;
  }
  return res;
};


console.log(tribonacci(25));