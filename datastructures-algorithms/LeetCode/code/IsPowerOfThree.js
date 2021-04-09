// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnsdi2/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    while(n !== 1) {
        if(n<3) {
            return false;
        }
        n = n / 3;
    }
    return true;
};