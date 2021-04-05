// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhhkv/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let length = matrix.length;
    // 交换行
    for(let i = 0; i < parseInt(length/2); i++) {
        let temp = matrix[i];
        matrix[i] = matrix[length - i - 1];
        matrix[length - i - 1] = temp;
    }
    // 交换对角线
     for (let i = 0; i < length; ++i) {
        for (let j = i + 1; j < length; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};