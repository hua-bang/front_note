// function searchT(nums: number[], target: number): number {
//   return nums.indexOf(target);
// }

// function searchT(nums: number[], target: number): number {
//   let index: number = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// }


function searchT(nums: number[], target: number): number {
  const n: number = nums.length;
  if (n === 0) {
    return -1;
  }
  if (n === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let left: number = 0, right: number = n - 1;
  while (left <= right) {
    const mid: number = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
console.log(searchT([4, 5, 6, 7, 0, 1, 2], 3));

