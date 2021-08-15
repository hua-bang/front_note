/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let res = nums.reduce((prev, num) => prev ^ num, 0);

  let d = 1;

  while ((res & d) === 0) {
    d = d << 1;
  }

  let a, b;
  nums.forEach(num => {
    if ((num & d)) {
      a ^= num;
    } else {
      b ^= num;
    }
  })

  return [a, b];

};