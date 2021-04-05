/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// hash
 var twoSum = function(nums, target) {
    let map = new Map();
    let i = 0;
    let key = 0;
    for(; i < nums.length; i++) {
        if(map.has(target-nums[i])) {
            key = map.get(target-nums[i]);
            break;
        }else {
            map.set(nums[i], i);
        }
    }
    return [key,i]
};

// 双指针
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let first = 0, second = 1, maxIndex = nums.length;
    while(first < maxIndex) {
        if(second === maxIndex) {
            second = ++first + 1;
        }
        if(nums[first] + nums[second] === target) {
            break;
        }
        second++;
    }
    return [first, second]
};