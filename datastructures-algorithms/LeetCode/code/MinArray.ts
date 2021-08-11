function minArray1(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0
  };
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] > numbers[i]) {
      return numbers[i];
    }
  }
  return numbers[0];
};

function minArray2(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0
  };
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else if (numbers[mid] < numbers[right]) {
      right = mid;
    } else {
      right = right - 1;
    }
  }

  return numbers[left];
};

console.log(minArray([2, 2, 2, 0, 1]));