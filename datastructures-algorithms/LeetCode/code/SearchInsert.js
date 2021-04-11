function SearchInsert(arr, target) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + (right - left)) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}