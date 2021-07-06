function binarySearch(arr, target, left, right) {
  let mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  }

  if (left === right) {
    return -1;
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }

}

let arr = [1, 3, 4, 6, 7, 8, 10, 13, 14];
let target = 8;
console.log(binarySearch(arr, target, 0, arr.length - 1));

function binarySearchRecursion(arr, target, left, right) {
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearchRecursion(arr, target, 0, arr.length - 1));