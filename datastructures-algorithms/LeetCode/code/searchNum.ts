const arr: number[] = [5, 7, 7, 8, 8, 10];
let target: number = 8;

function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (target === nums[mid]) {
      let count = 1;
      let index = mid - 1;
      while (index >= left) {
        if (target === nums[index--]) {
          count++;
        }
      }
      index = mid + 1;
      while (index <= right) {
        if (target === nums[index++]) {
          count++;
        }
      }
      return count;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
};

console.log(search(arr, target));