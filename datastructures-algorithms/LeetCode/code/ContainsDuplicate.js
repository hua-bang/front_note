//https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/

var containsDuplicate = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length-1;i++) {
        if(nums[i] == nums[i+1])
            return true;
    }
    return false;
};

var containsDuplicate = function(nums) {
    return nums.length != (new Set(nums)).size;
};