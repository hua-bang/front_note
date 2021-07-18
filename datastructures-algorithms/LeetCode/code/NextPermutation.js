function nextPermutation(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  let i, j;
  
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }

  for (j = arr.length - 1; j > i; j--) {
    if (arr[j] > arr[i]) {
      break;
    }
  }

  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;

  let begin = i + 1, tail = arr.length - 1;
  
  while (begin < tail) {
    let temp = arr[tail];
    arr[tail] = arr[begin];
    arr[begin] = temp;
    begin++;
    tail--;
  }

  return arr;
}

console.log(nextPermutation([1,2]));