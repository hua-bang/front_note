var removeDuplicates = function (nums) {
    let left = 0,
        right = 1;
    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            nums.splice(right, 1);
        } else {
            left++;
            right++;
        }
    }
    console.log(nums)
    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));