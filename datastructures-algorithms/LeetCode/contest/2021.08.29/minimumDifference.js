/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let min = -1;
  if (k === 1) {
    return 0;
  }
  let arr = [];
  reduc(0);

  function reduc(i) {
    if (arr.length === k) {
      let num = getDiff(arr);
      if (min === -1) {
        min = num;
      } else {
        min = min < num ? min : num;
      }
    } else {
      for (let index = i; index < nums.length; index++) {
        arr.push(nums[index]);
        reduc(index + 1);
        arr.pop();
      }
    }
  }
  return min;
};

function getDiff(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

let nums = [9,4,1,7], k = 2
console.log(minimumDifference(nums, k));

function minimumDifference(nums, k) {
  if (nums.length === 1 || k === 1)
    return 0;
  num.sort((a, b) => a - b);
  let ans = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    ans = Math.min(num[i + k - 1] - nums[i], ans);
  }
  return ans;
}