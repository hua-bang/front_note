// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/5v8a6t/

// 1. 定义首尾两个指针， i,j
// 2. 循环 每当i找到偶数时候推出 j找到奇数数推出
// 3. swap
// 4. 直到两端结束 推出循环

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let i = 0, j = nums.length - 1;

  while (i < j) {
    while ((nums[i] % 2) === 1 && i < j) i++;
    while ((nums[j] % 2) === 0 && i < j) j--;

    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  return nums;
};

console.log(exchange([1, 2, 3, 4, 5, 6, 7, 8]));