/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res = [];
  if (target === 0 || target === 1) {
    return [target];
  }

  let left = 1, right = 2;
  let sum = left + right;

  while (left <= (target << 2)) {
    if (sum < target) {
      right++;
      sum += right
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      if (left === right) {
        break;
      }
      let arr = [];
      for (let index = left; index <= right; index++) {
        arr.push(index);
      }
      res.push(arr);
      sum -= left;
      left++;
    }
  }

  return res;
};