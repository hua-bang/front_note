//https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2ba4i/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let left = 0, right = nums.length - 1;
    while(right >= 0) {
        if(nums[right]===0) {
            nums.splice(right, 1);
            nums.push(0);
        }
        right--;
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let front = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!==0) {
            nums[front++] = nums[i];
        }
    }

    while(front < nums.length) {
        nums[front++] = 0;
    }
};