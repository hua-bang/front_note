// https://leetcode-cn.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left: number = 0, right: number = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};