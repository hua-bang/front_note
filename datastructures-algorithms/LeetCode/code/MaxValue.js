/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  const dp = grid;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
        continue;
      }

      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
        continue;
      }

      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
        continue
      }

      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m-1][n-1];


};

console.log(
maxValue(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
))