// 题目： 给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。
// 重复出现的子串要计算它们出现的次数。

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。

// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

// 规律，进行分组

let countBinarySubStrings = (string) => {
    let counts = [];
    let index = 0, n = string.length; 

    while(index < n) {
        const c = string[index];
        let count = 0;
        while(index < n && string[index] === c) {
            ++index;
            ++count;
        }
        counts.push(count);
    }

    if(counts.length === 0) {
        return 0;
    }

    let ans = 0;

    for(let i = 1; i < counts.length; i++) {
        ans += Math.min(counts[i], counts[i-1]);
    }
    return ans;
}

export default countBinarySubStrings;