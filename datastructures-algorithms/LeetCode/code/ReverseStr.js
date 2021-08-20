/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let n = s.length;
  let arr = Array.from(s);
  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(n, i + k) - 1)
  }
  return arr.join("");
};

function reverse(arr, left, right) {
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
}
console.log(reverseStr("abcdefg",2))