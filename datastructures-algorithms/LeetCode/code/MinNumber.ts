function minNumber(nums: number[]): string {
  quickSort(nums, 0, nums.length - 1);
  return nums.join("");
};

function quickSort(nums: number[], left: number, right: number): void {
  if (left >= right) {
    return
  }
  let i = left, j = right;
  // string x + y > y + x -> x > y
  while (i < j) {
    while ((`${nums[j]}${nums[left]}` >= `${nums[left]}${nums[j]}`) && (i < j)) {
      j--;
    }
    while ((`${nums[i]}${nums[left]}` <= `${nums[left]}${nums[i]}`) && (i < j)) {
      i++;
    }
    swap(nums, i, j);
  }

  swap(nums, i, left);
  quickSort(nums, left, i - 1);
  quickSort(nums, i + 1, right);
}

function swap(arr: number[], left: number, right: number):void {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
console.log(minNumber([3, 30, 34, 5, 9]));