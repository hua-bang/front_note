// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/9h6vo2/

// 1. BFS 起点 0, 0 
// 2. 每访问一个点 则找到邻接点 根据数位之和判断可不可达到
// 3. 顺序无关 主要是数量

var movingCount = function (m, n, k) {
  const queue = [];
  let i = 0, j = 0;
  queue.push([0, 0]);
  const visitor = [];
  let count = [];

  for (let index = 0; index < m; index++) {
    visitor[index] = [];
  }
  visitor[0][0] = 1;

  while (queue.length !== 0) {
    [i, j] = queue.shift()
    count++
    if (i !== 0) {
      // 可以向上
      if (!visitor[i-1][j] && canMove(i-1,j,k)) {
        queue.push([i - 1, j]);
        visitor[i-1][j] = 1;
      }
    }
    if (i !== (m - 1)) {
      // 可以向下
      if (!visitor[i+1][j] && canMove(i+1,j,k)) {
        queue.push([i + 1, j]);
        visitor[i+1][j] = 1;
      }
    }
    if (j !== 0) {
      // 可以向左
      if (!visitor[i][j-1] && canMove(i,j-1,k)) {
        queue.push([i, j - 1]);  
        visitor[i][j-1] = 1;
      }
    }
    if (j !== (n - 1)) {
      // 可以向右
      if (!visitor[i][j+1] && canMove(i,j+1,k)) {
        queue.push([i, j + 1]);
        visitor[i][j+1] = 1;
      }
    }
  }

  return count;

  function canMove(m, n, k) {

    let arr = []

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
};


console.log(movingCount(3, 2, 17));