function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }
  if (matrix.length === 1) {
    return matrix[0];
  }
  let i = 0, j = 0;
  let nlen = matrix.length, mlen = matrix[0].length;
  let visited = new Array(nlen).fill(0);
  visited = visited.map(v => new Array(mlen).fill(false));
  let count = 1;
  let flag = 1;
  visited[0][0] = true;
  let res = [matrix[0][0]];
  while (count < (nlen * mlen)) {
    if (flag == 1) {
      if ((j + 1 >= mlen) || visited[i][j + 1]) {
        flag = 2;
        continue;
      } else {
        visited[i][++j] = true;
        res.push(matrix[i][j]);
        count++;
      }
    } else if (flag == 2) {
      if ((i + 1 >= nlen) || visited[i + 1][j]) {
        flag = 3;
        continue;
      } else {
        visited[++i][j] = true;
        res.push(matrix[i][j]);
        count++;
      }
    } else if (flag == 3) {
      if ((j - 1 < 0) || visited[i][j - 1]) {
        flag = 4;
        continue;
      } else {
        visited[i][--j] = true;
        res.push(matrix[i][j]);
        count++;
      }
    } else {
      if ((i - 1 < 0) || visited[i - 1][j]) {
        flag = 1;
        continue;
      } else {
        visited[--i][j] = true;
        res.push(matrix[i][j]);
        count++;
      }
    }
  }
  return res;
};