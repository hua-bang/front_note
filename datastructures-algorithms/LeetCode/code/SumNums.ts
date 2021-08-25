function sumNums(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sumNums(n - 1);
};


console.log(sumNums(9));
