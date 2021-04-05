// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while(left < right) {
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }
};