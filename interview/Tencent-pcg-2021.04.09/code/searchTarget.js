function searchTarget(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
        if(arr[0] >= target) {
            arr.unshift(target);
            return 0;
        }else if(arr[arr.length - 1] <= target) {
            return arr.push(target) - 1;
        }else {
            if(arr[i]<= target && arr[i+1] >target) {
                arr.splice(i, 0, target);
                return i + 1;
            }
        }
    }
}

let arr=[1,5,7,8], target=5;
console.log(searchTarget(arr, target));