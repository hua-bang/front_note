//  https://leetcode-cn.com/problems/largest-number/


var largestNumber = function (nums) {
    let arr = [];
    nums.forEach(v => {
        arr.push(...[...((v) + "")]);
    })
    return arr.sort((a, b) => b - a).join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));