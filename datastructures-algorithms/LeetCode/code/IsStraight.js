// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/57mpoj/

// 1. no repeated except 0
// 2. max - min < 5

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    
    let set = new Set();
    let max = 0, min = 14;

    for(let i = 0; i < nums.length; i++) {

        // you can skip it
        if(nums[i] === 0) continue;
        // the value which equals 0 can multiple, else false
        if(set.has(nums[i])) {
            return false;
        } else {
            set.add(nums[i]);
            max = max < nums[i] ? nums[i] : max;
            min = min > nums[i] ? nums[i] : min;
        }
    }

    if(max - min >= 5) {
        return false;
    }

    return true;
};