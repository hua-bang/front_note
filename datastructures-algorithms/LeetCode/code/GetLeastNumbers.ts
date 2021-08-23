function getLeastNumbers(arr: number[], k: number): number[] {
  if (k >= arr.length) {
    return arr;
  }
  quickSort(arr);
  return arr.slice(0, k); 
};

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): void {
  if (left > right) {
    return;
  }
  let index = getIndex(arr, left, right);
  
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, right);
}

function getIndex(arr: number[], left: number, right:number): number {
  let pivot = left, index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] <= arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr: number[], left: number, right: number) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

console.log(getLeastNumbers([0, 1, 2, 1],1));