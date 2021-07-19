function findLastBinarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  let index;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      if (mid === arr.length - 1) {
        return mid;
      }
      index = mid;
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  while (index < arr.length) {
    if (index === arr.length - 1) {
      return index;
    }
    if (arr[index + 1] !== target) {
      return index;
    }
    index++;
  }

  return -1;
}
let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9];
let target = 5;
console.log(findLastBinarySearch(arr, target));