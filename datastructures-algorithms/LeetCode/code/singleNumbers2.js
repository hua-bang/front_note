/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let result = nums.reduce((prev, current) => prev ^ current);
  let div = 1;
  while (!(result & div)) {
    div = div << 1;
  }
  let a = 0, b = 0;
  nums.forEach(num => {
    if (num & div) {
      a = a ^ num;
    } else {
      b = b ^ num;
    }
  });
  return [a, b];
};

console.log(singleNumbers([4, 1, 4, 6]));