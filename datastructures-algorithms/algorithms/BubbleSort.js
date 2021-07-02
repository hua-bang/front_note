function bubbleSort(nums) {
    let len = nums.length;

    let hasChange = true;

    // 外层每个元素的循环
    for (let i = 0; i < len - 1 && hasChange; i++) {
        hasChange = false;
        // 每个元素与数组内元素对比的循环
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
                hasChange = true;
            }
        }
    }

    return nums;
}

let res = bubbleSort([5,3,2,10,1,4]);
console.log(res);