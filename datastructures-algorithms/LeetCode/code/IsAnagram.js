// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn96us/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let sArr = [...s].sort();
    let tArr = [...t].sort();
    for(let i = 0; i < sArr.length; i++ ) {
        if(sArr[i]!==tArr[i]) {
            return false;
        }
    }
    return true;
};