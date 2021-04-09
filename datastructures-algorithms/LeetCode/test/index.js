let arr = [3, 34, 4, 12, 5, 2];

function subSet(arr, index, sum) {
    if(sum === 0) {
        return true;
    }
    if(index === 0 && sum === arr[index]) {
        return true;
    }else if(index === 0){
        return false;
    }
    if(arr[index] > sum) {
        return subSet(arr, index - 1 , sum);
    }
    return subSet(arr, index - 1 , sum - arr[index]) || subSet(arr, index - 1, sum);
}

function dp_subSet(arr, sum) {
    let dpArr = new Array();
    for(let i = 0; i < arr.length; i++) {
        dpArr[i] = new Array();
        for(let j = 0; j < sum + 1; j++) {
            dpArr[i][j] = false; //0表示只有一个空的红圈
        }
    }
    for(let i = 0; i < sum + 1; i++) {
        dpArr[0][i] = i===arr[0] ? true : false;
    }
    for(let j = 0; j < arr.length; j++) {
        dpArr[j][0] = true;
    }
    for(let i = 1; i < arr.length; i++) {
        for(let j = 1; j < sum + 1; j++) {
            if(arr[i] > j) {
                dpArr[i][j] = dpArr[i-1][j];
            }else {
                dpArr[i][j] = dpArr[i-1][j-arr[i]] || dpArr[i-1][j];
            }
        }
    }
    return dpArr[arr.length -1][sum-1];
}
console.log(dp_subSet(arr, 9));




// console.log(subSet(arr, arr.length - 1, 59));
// console.log(subSet(arr, arr.length - 1, 9));
// console.log(subSet(arr, arr.length - 1, 10));
// console.log(subSet(arr, arr.length - 1, 11));
// console.log(subSet(arr, arr.length - 1, 12));
// console.log(subSet(arr, arr.length - 1, 13));