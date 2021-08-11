function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) {
    return false;
  }
  let n: number = matrix.length - 1, m: number = matrix[0].length - 1;
  let i = 0, j = m;
  while (i >=0 && i <= n && j <= m && j >= 0) {
    if (target === matrix[i][j]) {
      return true;
    } else if (target > matrix[i][j]) {
      i++
    } else if (target < matrix[i][j]) {
      j--;
    }
  }
  return false;
};

let arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

console.log(findNumberIn2DArray(arr, 20));