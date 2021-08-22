function quickSort1(nums, left = 0, right = nums.length - 1) {
  if (left >= right) {
    return;
  }
  let partitionIndex = partition(nums, left, right);
  quickSort(nums, left, partitionIndex - 1);
  quickSort(nums, partitionIndex + 1, right);
}

function partition(nums, left, right) {
  let pivot = left, index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (nums[i] <= nums[pivot]) {
      swap(nums, i, index);
      index++;
    }
  }
  swap(nums, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [2, 8, 4, 21, 5, 100]
quickSort(nums);
console.log(nums);



function quickSort(nums, left = 0, right = nums.length - 1) {
  if (left >= right) {
    return;
  }
  let pivot = left, index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (nums[i] <= nums[pivot]) {
      swap(nums, i, index);
      index++;
    }
  }
  swap(nums, pivot, index - 1);
  quickSort(nums, left, index - 2);
  quickSort(nums, index, right);
}