// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnoilh/

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const result = parseInt(s.trim().match(/^[-+]?[0-9]*/g)[0]) || 0;
    return result > 2147483647
        ? 2147483647
        : result < -2147483648
            ? -2147483648
            : result;
};