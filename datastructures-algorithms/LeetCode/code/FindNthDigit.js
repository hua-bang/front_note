/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {

  let digit = 1;
  let start = 1;
  let count = 9;

  while (n > count) {
    n -= count;
    digit++;
    start *= 10;
    count = 9 * start * digit;
  }

  let number = start + Math.floor((n - 1) / digit);
  return Number(number.toString()[(n - 1) % digit]);

};

console.log(findNthDigit(192));