function constructArr1(a: number[]): number[] {
  let leftArr = [], rightArr = [];
  leftArr[0] = 1;
  rightArr[a.length - 1] = 1;
  for (let i = 1; i < a.length; i++) {
    leftArr[i] = leftArr[i - 1] * a[i - 1];
  }
  let arr = new Array(a.length);
  for (let i = a.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * a[i + 1];
  }

  for (let i = 0; i < a.length; i++) {
    arr[i] = leftArr[i] * rightArr[i];
  }

  return arr;
};

function constructArr(a: number[]): number[] {
  if (a.length === 0) {
    return [];
  }
  let arr = new Array(a.length);
  arr[0] = 1;
  
  for (let i = 1; i < a.length; i++) {
    arr[i] = arr[i - 1] * a[i - 1];
  }
  let temp = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    arr[i] = arr[i] * temp;
    temp = temp * a[i];
  }

  return arr;
};

let arr = [1, 2, 3, 4, 5];
console.log(constructArr(arr));