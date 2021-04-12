function getRepeat(arr) {
    let map = {};
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === 1) {
            res.push(arr[i]);
            map[arr[i]]++;
        } else if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    return res;
}

console.log(getRepeat([2, 9, 9, 100, 3, 2, 2, 2, 77, 3]));
console.log(getRepeat([2, 2, 9, 9, 100, 3, 2, 2, 2, , 9, 77, 3]));