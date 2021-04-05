// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2y0c2/

var intersrct = (nums1, nums2) => {

    // 先对数组进行排序
    nums1.sort((a, b) => {
        return a - b;
    });

    nums2.sort((a, b) => {
        return a - b;
    });

    // 初始化两个指针
    let first = 0, second = 0;

    // 数组，存放交集元素
    let arr = [];

    while(first < nums1.length && second < nums2.length) {
        // 相等 进行push
        if(nums1[first] === nums2[second]) {
            arr.push(nums1[first]);
            // 两个指针往后移动
            first++;
            second++;
        }else if(nums1[first] < nums2[second]) {   //不相等，小的往下一位走
            first++;
        }else if(nums1[first] > nums2[second]){
            second++;
        }
    }
    return arr;
}

var intersect = function(nums1, nums2) {
    let map = {};
    let arr = [];
    for(let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = map[nums1[i]] === undefined ? 1 : ++map[nums1[i]];
    }
    for(let i = 0; i < nums2.length; i++) {
        let val = map[nums2[i]];
        if(val>0) {
            arr.push(nums2[i]);
            map[nums2[i]]--;
        }
    }
    return arr;
};

let a = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
let b = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
console.log(intersrct(a,b));