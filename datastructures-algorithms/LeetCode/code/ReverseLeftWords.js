// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/589fz2/
// 1. 使用字串翻转
// 2. 使用第二种，即遍历字串 时间复杂度O(n) 空间复杂度O(n)


/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substring(n) + s.substring(0, n);
    let words = [];
    for(let i = n; i < s.length; i++) {
        words.push(s[i]);
    }
    for(let i = 0; i < n; i++ ){
        words.push(s[i]);
    }
    return words.join("");
};