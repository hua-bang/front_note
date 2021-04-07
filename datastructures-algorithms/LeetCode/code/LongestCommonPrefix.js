// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnmav1/

let strs = ["dog","racecar","car"]

let longestCommonPrefix = (strs) => {

    function getCommonPrefix(str1, str2) {
        let first = 0, second = 0;
        let str = "";
        while(first < str1.length && second < str2.length) {
            if(str1[first] === str2[second]) {
                str += str1[first];
            }else {
                break;
            }
            first++;
            second++;
        }
        return str;
    }

    return strs.reduce((commonStr, str) => getCommonPrefix(commonStr, str));
};

console.log(longestCommonPrefix(strs));