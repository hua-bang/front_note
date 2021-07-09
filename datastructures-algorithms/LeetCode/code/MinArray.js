// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/50xofm/

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return numbers[i + 1];
    }
  }
  return numbers[0];
};

// 循环二分法
// 每次找中间值 记住索引为m
// num[m] > num[j] 旋转点应该在(m+1,j)
// num[m] < num[i] 旋转点应该在(i,m)中
// i == j 弹出即可

var minArray = function (numbers) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else if (numbers[mid] < numbers[left]) {
      right = mid;
    } else {
      right = right - 1;
    }
  }
  return numbers[left];
};

console.log(minArray([2, 2, 2, 0, 1]));
console.log(minArray([3, 4, 5, 1, 2]));

