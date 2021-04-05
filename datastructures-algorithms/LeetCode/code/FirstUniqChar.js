// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r/

/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let map = {};

    for(let i = 0; i < s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = {
                index: i,
                count: 1
            }
        }else {
            map[s[i]].count++;
        }
    }

    for(let key in map) {
        if(map[key].count === 1) {
            return map[key].index;
        }
    }

    return -1;
};


/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};