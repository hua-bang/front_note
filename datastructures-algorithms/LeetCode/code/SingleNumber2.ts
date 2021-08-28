function singleNumber(nums: number[]): number {
  let map = {};
  nums.forEach(num => {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] = map[num] + 1;
    }
  });
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) {
      return nums[i];
    }
  }
  return -1;
};