function isPowerOfTwo(n){
  let num = 1;
  while (num <= n) {
    if (num === n) {
      return true
    }
    num = num * 2;
  }
  return false;
};

console.log(isPowerOfTwo(1073741825));