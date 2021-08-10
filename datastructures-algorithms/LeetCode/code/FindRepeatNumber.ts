// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/submissions/

function findRepeatNumber1(nums: number[]): number {
  let map: Map<number, boolean> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      return nums[i];
    } else {
      map.set(nums[i], true);
    }
  }
};

function findRepeatNumber(nums: number[]): number {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i) {
      i++
      continue;
    }
    if (nums[nums[i]] === nums[i]) {
      return nums[i];
    }
    let temp = nums[i];
    nums[i] = nums[temp];
    nums[temp] = temp;
  }
  return -1;
};