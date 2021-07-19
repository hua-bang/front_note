function findFirstBinarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      if (mid === 0) {
        return mid;
      }
      left = mid;
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  while (left >= 0) {
    if (left === 0) {
      return left;
    }
    if (arr[left - 1] !== target) {
      return left;
    }
    left--;
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9];
let target = 5;
console.log(findFirstBinarySearch(arr, target));
