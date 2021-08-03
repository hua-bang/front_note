// https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/solution/zui-duan-wu-xu-lian-xu-zi-shu-zu-by-leet-yhlf/
// arr => [a,b,c]
// b is beSorted
// 判断a前缀和c后缀相等的长度

function findUnsortedSubarray(nums) {
  if (isSorted(nums)) {
    return 0;
  }
  const numsSorted = [...nums].sort((a, b) => a - b);
  let left = 0;
  while (nums[left] === numsSorted[left]) {
    left++;
  }
  let right = nums.length - 1;
  while (nums[right] === numsSorted[right]) {
    right--;
  }
  return right - left + 1;
}

const isSorted = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
}

function findUnsortedSubarray(nums) {
  const n = nums.length;
    let maxn = -Number.MAX_VALUE, right = -1;
    let minn = Number.MAX_VALUE, left = -1;
    for (let i = 0; i < n; i++) {
      if (maxn > nums[i]) {
        right = i;
      } else {
        maxn = nums[i];
      }
      if (minn < nums[n - i - 1]) {
        left = n - i - 1;
      } else {
        minn = nums[n - i - 1];
      }
      console.log(maxn ,right);
    }
    return right === -1 ? 0 : right - left + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));