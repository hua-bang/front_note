/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= (2 ** n - 1); i++) {
    let s = i.toString(2);
    if (s.length !== n) {
      s = "0".repeat(n - s.length) + s;
    }
    if (nums.indexOf(s) === -1) {
      return s;
    }
  }
  return "";
};

var findDifferentBinaryString = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= (2 ** n - 1); i++) {
    let j = 0;
    for (; j < nums.length; j++) {
      let num = parseInt(nums[j], 2);
      if (i === num) {
        break;
      }
    }
    if (j === nums.length) {
      let s = i.toString(2);
      if (s.length < n) {
        s = "0".repeat(n - s.length) + s;
      }
      return s;
    }
    nums.splice(j, 1);
  }
  return "";
};

a !== b;

let nums = ["000", "001", "010"]

console.log(findDifferentBinaryString(nums));

// console.log(parseInt(4).toString(2));