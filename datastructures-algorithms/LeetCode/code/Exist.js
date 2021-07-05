// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/58wowd/

// 1. 比较容易看出这道题应该用DFS算法
// 2. 注意边界条件
// 3. 匹配则继续往下一个元素找， 否则回溯

// 时间复杂度：O(3^kMN) MN个起点 每个点最坏情况为(3^k)
// 空间复杂度: 递归深度不超过k， 且每次栈空间占用O(k), 其他用完则释放 最坏情况 K = MN O(MN)

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {


    const wordLen = word.length;

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(dfs(board, i, j, 0)) {
                return true;
            }
        }
    }

    return false;


    function dfs(arr, i, j, k) {

        // 去除边界条件
        if( i < 0 || j < 0 || i >= arr.length || j >= arr[i].length) {
            return false;
        }
        
        // 说明前面的已经匹配
        if(k === wordLen) {
            return true;
        }


        // 如果这个元素可以匹配
        if(board[i][j] === word[k]) {
            if(word.length === 1) {
                return true;
            }
            board[i][j] = "";  
            // 进行下一个搜索， 这里使用 || 可以使用若一个点成功了， 那么其他的点不用继续执行 
            let res = dfs(arr, i-1, j, k + 1) || dfs(arr, i, j - 1, k + 1) || dfs(arr, i + 1, j, k + 1) || dfs(arr, i, j+1, k + 1); 

            if(res) {
                return true;
            }
            board[i][j] = word[k];
        }else {
            // 不能匹配的情况
            return false;
        }
    }
};


let board = [["a"]], word = "a"

console.log(exist(board, word));