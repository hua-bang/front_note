// https://leetcode-cn.com/problems/longest-palindromic-subsequence/solution/zui-chang-hui-wen-zi-xu-lie-by-leetcode-hcjqp/

function longestPalindromeSubseq(s: string):number {
  const n = s.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    const c1 = s[i];
    for (let j = i + 1; j < n; j++) {
      const c2 = s[j];
      if (c1 === c2) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}