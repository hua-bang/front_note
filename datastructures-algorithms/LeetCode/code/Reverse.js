// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnx13t/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let flag = x >= 0 ? 1 : -1;
    x = x>= 0 ? x: -1 * x;
    let newArr = String(x).split("").reverse();
    if(newArr[0]===0) {
        newArr.shift();
    }
    let res = Number(newArr.join("")) * (flag);
    if((res > (Math.pow(2,31)-1)) || (res < (Math.pow(2,31)*-1))) {
        return 0;
    }
    return res
};

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let result = 0;
    let flag = x > 0? 1: (-1);
    x = x > 0 ? x : x * (-1);
    while(x > 0) {
        result = result * 10 + (x % 10);
        x = parseInt(x/10); 
    }
    if((result < Math.pow(2,31)*(-1)) || (result > Math.pow(2,31) - 1)) {
        return 0;
    }
    return result * flag;
};