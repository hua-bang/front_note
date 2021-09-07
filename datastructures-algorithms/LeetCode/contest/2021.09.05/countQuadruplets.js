/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let length = 0;
  dfs(0, 0, 0, []);

  function dfs(i, count, sum, arr) {
    console.log(arr);
    if (i === nums.length) {
      return;
    }
    if (count === 3) {
      for (let index = i; index < nums.length; index++) {
        if (sum === nums[index]) {
          length++;
        }
      }
    } else {
      for (let index = i; index < nums.length; index++) {
        sum += nums[index];
        arr.push(nums[index]);
        dfs(index + 1, count + 1, sum, arr);
        sum -= nums[index];
        arr.pop();
      }
    }
  }

  return length;
};




const nums = [9, 6, 8, 23, 39, 23]
console.log(countQuadruplets(nums));


/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let res = 0;
  let map = new Map();
  for (let i = 3; i < nums.length; i++) {
    for (let j = 2; j < i; j++) {
      for (let m = 1; m < j; m++) {
        for (let n = 0; n < m; n++) {
          if (nums[n] + nums[m] + nums[j] === nums[i]) {
            if (!map.get('' + n + m + j + i)) {
              res++;
              map.set('' + n + m + j + i, 1)
            }
          }
        }
      }
    }
  }
  return res
};