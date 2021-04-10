// https://leetcode-cn.com/problems/ugly-number/comments/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    if(n==0) {
        return false
    }
    let prev = n;
    while(prev!==1) {
        if(Number.isInteger(prev / 2)) {
            prev /= 2;
        }else if(Number.isInteger(prev / 3)) {
            prev /= 3;
        }else if(Number.isInteger(prev / 5)) {
            prev /= 5;
        }else {
            return false;
        }
    }
    return true
};