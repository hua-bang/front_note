function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length === 0) {
    return []
  }
  let firstIndex = 0;
  let res = [];
  for (let i = 0; i < k; i++) {
    if (nums[firstIndex] < nums[i]) {
      firstIndex = i;
    }
  }

  let max = nums[firstIndex];
  res.push(max);

  for (let i = 1; i <= nums.length - k; i++) {
    if (nums[i + k - 1] > max) {
      max = nums[i + k - 1];
    }else if (nums[i - 1] === max) {
      let maxIndex = i;
      for (let index = i; index < i + k; index++) {
        if (nums[maxIndex] < nums[index]) {
          maxIndex = index;
        }
      }
      max = nums[maxIndex];
    }
    res.push(max);
  }

  return res;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
let res = maxSlidingWindow(nums, k);
console.log(res);