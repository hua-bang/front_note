function findKthLargest(nums: number[], k: number): number {
  quickSort(nums);
  return nums[nums.length - k];
};

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
  if (left < right) {
    let index: number = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
}

function partition(nums: number[], left: number, right: number): number {
  let pivot = left, index = left + 1;
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      swap(nums, i, index);
      index++;
    }
  }
  swap(nums, pivot, index - 1);
  return index - 1;
}

function swap(arr: number[], i: number, j: number) {
  let temp: number = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

findKthLargest([3, 2, 1, 5, 6, 4], 1);