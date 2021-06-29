// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/

// 1. 直接使用s.replaceAll
// 2. 遍历每个元素，同时用开辟数组空间进行存放 时间复杂度：O(n) 空间复杂度：O(n)

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    
    // return s.replaceAll(" " , "%20");

    let res = [];
    for(let i = 0; i < s.length; i++ ) {
        s[i] === " " ? res.push("%20") : res.push(s[i]);
    }
    return res.join("");
};