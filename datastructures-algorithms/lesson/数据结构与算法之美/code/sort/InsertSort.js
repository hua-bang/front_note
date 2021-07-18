function insertSort(arr) {
  let length = arr.length;
  if (length <= 1) {
    return arr;
  }

  for (let i = 1; i < length; i++) {
    let val = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > val) {
        arr[j + 1] = arr[j]
      } else {
        arr[j + 1] = val;
        break;
      }
    }
  }
  return arr;
}

console.log(insertSort([9,8,7,6,5,5,4,3,2,1]));

function insertSort(arr) {
  let length = arr.length;
  if (length <= 1) {
    return arr; 
  }

  for (let i = 1; i < length; i++) {
    let val = arr[i];
    let j = 0
    for (; j < i; j++) {
      if (arr[j] >= val) {
        break;
      }
    }
    for (let index = i - 1; index >= j; index--) {
      arr[index + 1] = arr[index];
    }
    arr[j] = val;
  }

  return arr;
}
