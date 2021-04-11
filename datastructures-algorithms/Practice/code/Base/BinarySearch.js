function binarySearch(arr, target, left, right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (left >= right) {
        return -1;
    }
    return arr[mid] > target ? binarySearch(arr, target, left, mid - 1) : binarySearch(arr, target, mid + 1, right);
}

let index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0, 8);
console.log(index);