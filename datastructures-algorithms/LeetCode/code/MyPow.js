/**
 * @param {number} x
 * @param {number} n
 * @return {number} 
 */
var myPow = function(x, n) {
  let res = 1;
  if(n === 0) {
    return 1;
  }
  if(n < 0) {
    x = 1 / x;
    n = -n;
  }

  while(n) {
    res *= x;
    n--;
  }

  return res;
};

console.log(myPow(2.0, -2));