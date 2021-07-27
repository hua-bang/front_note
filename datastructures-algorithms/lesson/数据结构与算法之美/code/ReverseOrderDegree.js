function reverseOrderDegree(arr) {
  let num = 0;
  mergeSortCount(arr, 0, arr.length - 1);
  return num;


  function mergeSortCount(arr, left, right) {
    if (left >= right) {
      return;
    }
    let mid = (left + right) >> 1;
    mergeSortCount(arr, left, mid);
    mergeSortCount(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }

  function merge(arr, left, mid, right) {
    let i = left, j = mid + 1, index = 0;
    let temp = [];
    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[index++] = arr[i++];
      } else {
        num += mid + 1 - i;
        temp[index++] = arr[j++];
      }
    }

    while (i <= mid) {
      temp[index++] = arr[i++];
    }

    while (j <= right) {
      temp[index++] = arr[j++];
    }

    for (let i = left; i <= right; i++) {
      arr[i] = temp[i - left];
    }
  }
  
}

console.log(reverseOrderDegree([2,4,3,1,5,6]));

function reverseOrderDegree(arr) {
  let num = 0;
  mergeSortCount(arr, 0, arr.length - 1);
  return num;


  function mergeSortCount(arr, left, right) {
    if (left === right) {
      return [arr[left]];
    }
    let mid = (left + right) >> 1;
    let leftArr = mergeSortCount(arr, left, mid);
    let rightArr = mergeSortCount(arr, mid + 1, right);
    return merge(leftArr, rightArr);
  }

  function merge(leftArr, rightArr) {
    let temp = [];
    let n = leftArr.length, m = rightArr.length;
    let i = 0, j = 0, index = 0;

    while (i < n && j < m) {
      if (leftArr[i] <= rightArr[j]) {
        temp[index++] = leftArr[i++];
      } else {
        num += n - i;
        temp[index++] = rightArr[j++];
      }
    }

    while (i < n) {
      temp[index++] = leftArr[i++];
    }

    while (j < m) {
      temp[index++] = rightArr[j++];
    }

    console.log(temp);
    return temp;
  }
  
}

console.log(reverseOrderDegree([1,5,6,2,3,4]));
