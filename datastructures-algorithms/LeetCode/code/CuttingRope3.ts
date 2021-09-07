function cuttingRope(n: number): number {
  if (n <= 3) {
    return n - 1;
  }
  let res = 1;
  while (n > 4) {
    res *= 3;
    res %= 1e9 + 7;
    n = n - 3;
  }
  return res * n % (1e9 + 7);
};