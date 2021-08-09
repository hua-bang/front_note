function threeSum(nums: number[]): number[][] {
  let n: number = nums.length;
  nums.sort((a, b) => a - b);
  const res: number[][] = new Array();
  for (let first = 0; first < n; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third: number = n - 1;
    let target: number = -nums[first];

    for (let second = first + 1; second < n; second++) {
      if ((second > first + 1) && (nums[second] === nums[second - 1])) {
        continue;
      }
      while ((second < third) && (nums[second] + nums[third] > target)) {
        third--;
      }
      if (second === third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        res.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return res;
};