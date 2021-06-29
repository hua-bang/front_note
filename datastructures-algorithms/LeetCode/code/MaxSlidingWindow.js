// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/58o46i/

// 思路：这个问题是在考虑每次循环时计算最大值如何更在简便。
// 使用哈希表作为栈，用来存放最大值，即每个栈顶为当前的最大值
// 一开始先算出前k个数字中的最大值 作为栈顶
// 第一组滑动窗口 必然最大值就为初始化栈顶

// 滑动窗口滑动,即索引到i的时候,有两种情况
// 1. 第一种 此时之前最大值的数字滑出去，这时候我们得重新计算最大值
// 2. 第二种 最大值还在窗口内，此时我们只需要计算滑动进来的元素和窗口的大小


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0) {
        return [];
    }
    let maxStack = [];

    let res = [];

    let firstIndex = 0;

    for(let i = 1; i < k; i++ ) {
        if(nums[firstIndex] < nums[i]) {
            firstIndex = i;
        }
    }

    maxStack.push(nums[firstIndex]);

    for(let i = 0; i < nums.length - k + 1; i++) {
        let arr = nums.slice(i, i + k);

        if(i === 0 ) {
            res.push(maxStack[0]);
            continue;
        }

        // 如果去掉的刚好是最大值，那么将栈中的值也释放, 同时 需要计算大小
        if((nums[i - 1]) === maxStack[maxStack.length - 1]) {
            maxStack.pop();

            let index = i;

            for(let position = i; position <  i + k; position++ ) {
                if(nums[index] < nums[position]) {
                    index = position;
                }
            }
            maxStack.push(nums[index]);
        }else {
            if(nums[i + k - 1] > maxStack[maxStack.length - 1]) {
                maxStack.push(nums[i + k - 1]);
            }
        }
        res.push(maxStack[maxStack.length - 1]);
    }
    return res;
};

// 时间复杂度 O(n)
// 空间复杂度 O(1)
var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0) {
        return [];
    }

    let max;

    let res = [];

    let firstIndex = 0;

    for(let i = 1; i < k; i++ ) {
        if(nums[firstIndex] < nums[i]) {
            firstIndex = i;
        }
    }

    max = nums[firstIndex];

    for(let i = 0; i < nums.length - k + 1; i++) {

        if(i === 0 ) {
            res.push(max);
            continue;
        }

        // 如果去掉的刚好是最大值，那么将栈中的值也释放, 同时 需要计算大小
        if((nums[i - 1]) === max) {

            let index = i;

            for(let position = i; position <  i + k; position++ ) {
                if(nums[index] < nums[position]) {
                    index = position;
                }
            }
            max = nums[index];
        }else {
            if(nums[i + k - 1] > max) {
                max = nums[i + k - 1];
            }
        }
        res.push(max);
    }
    return res;
};