/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (target < nums[i]) {
      break;
    }
    if (target === nums[i]) {
      count++;
    }
  }

  return count;
};

let nums = [1,2,3,3,3,3,4,5,9];
let target = 3;
console.log(search(nums, target));

var searchBinary = function (nums, target) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      let count = 1;
      let i = mid - 1, j = mid + 1;
      while (i >= 0) {
        if (nums[i--] === target) {
          count++
        } else {
          break;
        }
      }

      while (j <= nums.length - 1) {
        if (nums[j++] === target) {
          count++
        } else {
          break;
        }
      }
      return count;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }

  }

  if (nums[left] === target) {
    return 1;
  }

  return 0;
}

console.log(searchBinary(nums, target));