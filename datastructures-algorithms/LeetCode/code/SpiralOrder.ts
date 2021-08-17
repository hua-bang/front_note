function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  let res = [];
  let m = matrix.length, n = matrix[0].length;
  let left = 0, right = n - 1, top = 0, down = m - 1;
  while (res.length < m * n) {
    for (let i = left; i <= right && res.length < m * n; i++) {
      res.push(matrix[top][i]);
    }
    top += 1;
    for (let i = top; i <= down && res.length < m * n; i++) {
      res.push(matrix[i][right]);
    }
    right -= 1;
    for (let i = right; i > left && res.length < m * n; i--) {
      res.push(matrix[down][i]);
    }
    down -= 1;
    for (let i = down; i > top && res.length < m * n; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
  }
  return res;
};

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
spiralOrder(matrix);