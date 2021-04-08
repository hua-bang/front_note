// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnumcr/

let merge = (num1, m, num2, n) => {
    let i = m - 1;
    let j = n - 1;
    let end = m + n - 1;
    while(j >= 0) {
        num1[end--] = (i>=0 && num1[i] > num2[j]) ? num1[i--] : num2[j++];
    } 
}