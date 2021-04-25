function threeSum(nums) {
    let arr = [];
    const len = nums.length;
    if (nums == null || len < 3) {
        return [];
    }
    nums.sort((a, b) => b - a);
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                arr.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }
    return arr;
}