// Given two sorted integer arrays, please write a function to combine them into a single sorted array.

// For example, given array `A = [1, 3, 5, 6, 7]` and array `B = [2, 3, 9]`, you should generate a new array `Result = [1, 2, 3, 3, 5, 6, 7, 9]` .

// Requirements:

// •	You should not change array A and B - store your answer in array Result.
// •	Minimize operations as much as you can.


let a = [1, 3, 5, 6, 7]
let b = [2, 3, 9]


// 双指针
function combine(a, b) {
    let first = 0, second = 0;
    let val = 0;
    let aLenth = a.length, bLength = b.length;
    let arr = [];
    while(first < aLenth || second < bLength) {
        // 遍历完了
        if(first === aLenth) {
            val = b[second];
            second++;
        }else if(second === bLength){
            val = a[first];
            first++;
        }else if(a[first] < b[second]) {
            val = a[first];
            first++;
        }else {
            val = b[second];
            second++;
        }
        arr.push(val);
    }
    return arr;
}