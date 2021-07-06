// 临界条件
// 找第一个比n大的数字，暂时索引为index
// 1. 数组中index比n大
// 2. index的上个元素比n小，或者它为第一个数
function firstGreaterThan(arr, target, left = 0, right = arr.length) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if ((arr[mid] > target) && ((mid === 0) || (arr[mid - 1] <= target))) {
      return mid;
    }

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 3, 4, 6, 7, 8, 10, 13, 14];
let target = 8;
console.log(firstGreaterThan(arr, target));