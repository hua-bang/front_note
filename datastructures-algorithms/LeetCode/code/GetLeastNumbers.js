function getLeastNumbers(arr, k) {
    if (k >= arr.length) {
        return arr;
    }
    return quickSort(arr, k, 0, arr.length - 1);
}

function quickSort(arr, k, l, r) {
    let i = l, j = r;

    while (i < j) {
        while (i < j && arr[j] >= arr[l]) j--;
        while (i < j && arr[i] <= arr[l]) i++;
        swap(arr, i, j);
    }

    swap(arr, i, l);
    if (i > k) return quickSort(arr, k, l, i - 1);
    if (i < k) return quickSort(arr, k, i + 1, r);

    return arr.slice(k);
}

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
