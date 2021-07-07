function quickSort(arr, left = 0, right = arr.length - 1) {
    let partitionIndex;

    // 相等则说明只有一个元素了
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        // 基准值位置确定
        quickSort(arr, partitionIndex + 1, right);
    }

    return arr;

}


function quickSortIteration(arr) {
    
    const stack = [];

    stack.push({
        low: 0,
        high: arr.length - 1
    });

    while (stack.length) {

        let { low, high } = stack.pop();
        let pivot = partition(arr, low, high);

        if (pivot - 1 > low) {
            stack.push({
                low,
                high: pivot - 1
            })
        }

        if (pivot + 1 < high) {
            stack.push({
                low: pivot + 1 ,
                high
            })
        }
    }

    return arr;

}

// 找基准值，注意 这里中还将数组进行了排序操作
function partition(arr, left, right) {
    // 选择第一个为基准值
    let pivot = left, index = pivot + 1;

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);    // 相当于 index 上用于是保存最小的值
            index++;
        }
    }

    swap(arr, pivot, index - 1);    // 最小值到第一位 基准值位置，即形成 小 基准值 大 的数组

    return index - 1;   // 返回基准值的索引
}

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

console.log(quickSort([2, 29, 3, 15, 22, 8, 30, 25]))

console.log(quickSortIteration([2,29,3,15,22,8,30,25]))