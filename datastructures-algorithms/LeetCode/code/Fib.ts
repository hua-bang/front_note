function fib(n: number): number {
  let p = 0, q = 1;
  for (let i = 2; i <= n; i++) {
    let temp = q + p;
    p = q;
    q = temp % (1e9 + 7);
  }
  return q;
};

console.log(fib(5));