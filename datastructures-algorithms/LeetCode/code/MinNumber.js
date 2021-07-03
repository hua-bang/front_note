// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/59ypcj/

// 1. string x + y > y + x -> x > y
// 2. sort bu the rule

// 时间复杂度 O(nlogn)
// 空间复杂度 O(logn);

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    quickSort(nums);
    return nums.join("");
};

// string x + y > y + x -> x > y

function quickSort(nums, left = 0 , right = nums.length - 1) {
    if (left >= right)
        return nums;
    let i = left, j = right;

    while (i < j) {
        // l的话为基准值
        // 1. 相当于 nums[j] > 基准值 一直下去
        while ((`${nums[j]}${nums[left]}` >= `${nums[left]}${nums[j]}`) && (i < j))
            j--;
        // 2. 相当于 nums[i] < 基准值 一直下去
        while ((`${nums[i]}${nums[left]}` <= `${nums[left]}${nums[i]}`) && (i < j))
            i++;
        // 3. 每一次去交互 num[i] 和 num[j]
        // 其实这里只有两种
        // 3.1 i < j 表明 左边有大于基准值的数， 右边有小于基准值的数，两数swap
        // 3.2 i == j 表明相遇了，swap无意义
        swap(nums, i, j);
    }
    // 基准值索引和i交换位置
    swap(nums, i, left);

    quickSort(nums, left, i - 1);
    quickSort(nums, i + 1, right);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(minNumber([3, 30, 34, 5, 9]));