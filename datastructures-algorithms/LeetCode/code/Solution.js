/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums;
};

/**
 * 获取原数组
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * 打乱数组
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const nums = [...this.nums];
    let n = nums.length;

    // 产生的结果有 n! 种可能
    for (let i = 0; i < n; i++) {
        // 从 i 到 n-1 随机选一个
        const rand = randOne(i, n - 1); 
        // 交换nums数组i和rand下标的两个元素
        [nums[i], nums[rand]] = [ nums[rand], nums[i]]
    }

    return nums;
};

// 获取闭区间 [n, m] 内的一个随机整数
function randOne(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
};
