function numWays(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }
  let p = 1, q = 2;
  for (let i = 3; i <= n; i++) {
    let temp = p + q;
    p = q;
    q = temp % (1e9 + 7);
  }
  return q;
};

console.log(numWays(7));