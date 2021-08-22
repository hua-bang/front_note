/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference1 = function (mat, target) {
  let min = Math.abs(mat.reduce((prev, curr) => prev + curr[0], 0) - target);
  let m = mat.length, n = mat[0].length;
  dfs(0, 0);
  return min;

  function dfs(i, sum) {
    for (let j = 0; j < n; j++) {
      let temp = sum + mat[i][j];
      let num = Math.abs(temp - target);
      if (i === m - 1) {
        min = min < num ? min : num;
      } else {
        if (temp < target || (temp - target) < min) {
          dfs(i + 1, temp);
        }
      }
    }
  }
};

let arr = [[10, 3, 7, 7, 9, 6, 9, 8, 9, 5], [1, 1, 6, 8, 6, 7, 7, 9, 3, 9], [3, 4, 4, 1, 3, 6, 3, 3, 9, 9], [6, 9, 9, 3, 8, 7, 9, 6, 10, 6]], target = 5;
console.log(minimizeTheDifference(arr, target));


function minimizeTheDifference(mat, target) {
  let n = mat.length, m = mat[0].length;
  const dp = new Array(71).fill(0).map(() => new Array(1601).fill(false));
  dp[0][0] = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 2 * target; k >= mat[i][j]; k--) {
        if (dp[i][k - mat[i][j]]) {
          dp[i + 1][k] = true;
        }
      }
    }
  }
  let min = -1;
  for (let i = 0; i <= 2 * target; i++) {
    if (dp[n][i]) {
      if (min === -1) {
        min = Math.abs(i - target);
      } else {
        min = Math.min(Math.abs(i - target), min);
      }
    }
  }
  return min;
}