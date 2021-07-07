var nthUglyNumber = function(n) {
  const dp = [1];
  let a, b, c;
  a = b = c = 0;
  for (let i = 1; i < n; i++) {
    let va = dp[a] * 2;
    let vb = dp[b] * 3;
    let vc = dp[c] * 5;
    dp[i] = Math.min(va, vb, vc);
    if(dp[i] === va) {
      a++;
    }
    if(dp[i] === vb) {
      b++;
    }
    if (dp[i] === vc) {
      c++;
    }
  }
  return dp[n - 1];
};
nthUglyNumber(10)