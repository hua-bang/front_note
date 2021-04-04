/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let numObj = {};
    for(let i = 0; i< nums.length; i++) {
        numObj[nums[i]] = numObj[nums[i]] !== undefined ? ++numObj[nums[i]] : 1;
    }
    for(let key in numObj) {
        if(numObj[key]===1) {
            return key;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    return nums.reduce((v,n) => v^n);
};