function printNumbers(n: number): number[] {
  let sum = 0;
  while (n !== 0) {
    sum = sum * 10 + 9;
    n--;
  }
  let res = [];
  for (let i = 0; i < sum; i++) {
    res.push(i + 1);
  }
  return res;
};

printNumbers(1);

