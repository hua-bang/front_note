function findFirstMore(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (arr[mid] === target) {
      if (mid === arr.length - 1) {
        return -1;
      }
      if (arr[mid + 1] > target) {
        return mid + 1;
      }
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9];
let target = 5;
console.log(findFirstLess(arr, target));