function maxValue(grid: number[][]): number {
  const m = grid.length, n = grid[0].length;
  let dp = new Array(m).fill(0);
  dp = dp.map(() => {
    return new Array(n).fill(0);
  });
  dp[0][0] = grid[0][0];
  let max = dp[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = dp[i - 1][j] > dp[i][j - 1] ? (dp[i - 1][j] + grid[i][j]) : (dp[i][j - 1] + grid[i][j]);
      }
      if (dp[i][j] > max) {
        max = dp[i][j]
      }
    }
  }
  return max;
};

let arr = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

console.log(maxValue(arr))