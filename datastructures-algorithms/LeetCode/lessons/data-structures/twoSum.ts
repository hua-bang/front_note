function twoSum(nums: number[], target: number): number[] {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (map.has(num)) {
      return [ map.get(num), i ];
    }
    map.set(nums[i], i);
  }
  return [];
};

// function twoSum(nums: number[], target: number): number[] {
//   let first = 0, second = 1, maxIndex = nums.length;
//   while (first < maxIndex) {
//     if(second >= maxIndex) {
//       second = ++ first + 1;
//     }
//     if(nums[first] + nums[second] === target) {
//       break;
//     }
//     second++;
//   }

//   return [first, second];
// };