// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xne8id/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newArr = [...s.toLowerCase()].filter((v) => ('a' <= v && v < 'z') || ('0' <= v && v <= '9'))
  // 双指针
  let left = 0,
    right = newArr.length - 1
  while (left < right) {
    if (newArr[left] !== newArr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}


/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    function check(v) {
        return ("a" <= v && v < "z") || ("0"<=v && v<="9");
    }
    s = s.toLowerCase();
    // 双指针
    let left = 0, right = s.length - 1;
    while(left < right) {
        if(!check(s[left])) {
            left++;
            continue;
        }
        if(!check(s[right])) {
            right--;
            continue;
        }
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};