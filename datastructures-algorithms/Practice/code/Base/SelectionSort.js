function selectionSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        let min = arr[i];

        for (let j = i + 1; j < length; j++) {
            minIndex = min > arr[j] ? j : minIndex;
            min = min > arr[j] ? arr[j] : min;
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSort([3, 2, 65, 12, 1000, 2000, 200, 400, 6000]));