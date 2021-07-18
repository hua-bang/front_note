function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));