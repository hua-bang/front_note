function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n === -1) {
    return 1 / x;
  }

  if (n % 2 === 0) {
    let a = myPow(x, n / 2);
    return a * a;
  } else {
    let b = myPow(x, (n - 1) / 2);
    return b * b * x;
  }
};

console.log(myPow(2.1, 3));