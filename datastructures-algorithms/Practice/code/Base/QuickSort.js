function quickSort(arr, left, right) {
    if (left < right) {
        let middle = getMiddle(arr, left, right);
        quickSort(arr, left, middle - 1);
        quickSort(arr, middle + 1, right);
    }
    return arr;
}

function getMiddle(arr, left, right) {
    let pivot = arr[left];
    while (left < right) {
        while (arr[right] > pivot && right > left) right--;
        arr[left] = arr[right];
        while (arr[left] < pivot && right > left) left++;
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

function QuickSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    const left = [];
    const right = [];
    const cur = nums.pop();

    for (const num of nums) {
        num > cur ? right.push(num) : left.push(num);
    }

    return QuickSort(left).concat(cur, QuickSort(right));
}

console.log(quickSort([5, 6, 7, 8, 9, 10, 11], 0, 6));