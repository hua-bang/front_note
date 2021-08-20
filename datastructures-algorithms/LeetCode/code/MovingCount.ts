function movingCount(m: number, n: number, k: number): number {
  const queue = [];
  let i = 0, j = 0;
  queue.push([0, 0]);
  const visitor = [];
  let count = 0;

  for (let index = 0; index < m; index++) {
    visitor[index] = [];
  }
  visitor[0][0] = 1;

  while (queue.length !== 0) {
    [i, j] = queue.shift();
    count++;
    if (i !== 0) {
      if (!visitor[i - 1][j] && canMove(i - 1, j, k)) {
        queue.push([i - 1, j]);
        visitor[i - 1][j] = 1;
      }
    }
    if (i !== (m - 1)) {
      // 可以向下
      if (!visitor[i + 1][j] && canMove(i + 1, j, k)) {
        queue.push([i + 1, j]);
        visitor[i + 1][j] = 1;
      }
    }
    if (j !== 0) {
      // 可以向左
      if (!visitor[i][j - 1] && canMove(i, j - 1, k)) {
        queue.push([i, j - 1]);
        visitor[i][j - 1] = 1;
      }
    }
    if (j !== (n - 1)) {
      // 可以向右
      if (!visitor[i][j + 1] && canMove(i, j + 1, k)) {
        queue.push([i, j + 1]);
        visitor[i][j + 1] = 1;
      }
    }
  }
  return count;
};

function canMove(m, n, k): boolean {
  let arr = [];

  while (m !== 0) {
    let r = m % 10;
    m = Math.floor(m / 10);
    arr.push(r);
  }

  while (n !== 0) {
    let r = n % 10;
    n = Math.floor(n / 10);
    arr.push(r);
  }

  let sum = arr.reduce((prev, current) => prev + current, 0);
  let res = sum <= k;
  return res;
}