function insertSort(nums) {
    for (let i = 1, j, current; i < nums.length; i++) {
        current = nums[i];

        for (j = i - 1; j >= 0 && nums[j] > current; j--) {
            nums[j + 1] = nums[j];
        }

        nums[j + 1] = current;
    }
}