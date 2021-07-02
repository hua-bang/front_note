function mergeSort(arr) {
    const len = arr.length;

    if (len < 2) {
        return arr;
    }

    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const result = [];

    // 最大的数留到最后
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }   
        
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

console.log(mergeSort([10,3,5,28,99,1000,2000,200]))