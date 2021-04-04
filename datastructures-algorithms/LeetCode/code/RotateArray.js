// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let temp = [...nums];
    for(let i = 0 ;i < temp.length; i++) {
        nums[(i+k)%temp.length] = temp[i];
    }
};