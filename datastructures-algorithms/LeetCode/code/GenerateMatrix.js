// https://leetcode-cn.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function (n) {
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0, right = n - 1, up = 0, down = n - 1, index = 1;
  while (index <= n * n) {
    for (let i = left; i <= right; i++) {
      arr[up][i] = index++;
    }
    up++;
    for (let i = up; i <= down; i++) {
      arr[i][right] = index++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      arr[down][i] = index++;
    }
    down--;
    for (let i = down; i >= up; i--) {
      arr[i][left] = index++;
    }
    left++;
  }
  return arr;
};

generateMatrix(3)