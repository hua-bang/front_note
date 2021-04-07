// https://leetcode-cn.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    let index = -1;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            if(haystack.substring(i, i + needle.length)===needle) {
                return i;
            }
        }
    }
    return -1;
};