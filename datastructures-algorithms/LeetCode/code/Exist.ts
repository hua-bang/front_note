function exist(board: string[][], word: string): boolean {
  let length = word.length;
  let m = board.length, n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (reduc(board, i, j, 0)) {
        return true;
      };
    }
  }
  return false;

  function reduc(arr: string[][],i: number, j: number, index: number): boolean {
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return false;
    }    if (index === length) {
      return true;
    }

    if (board[i][j] === word[index]) {
      if (word.length === 1) {
        return true;
      }
      board[i][j] = "";
      let res = reduc(arr, i - 1, j, index + 1) || reduc(arr, i, j - 1, index + 1) || reduc(arr, i + 1, j, index + 1) || reduc(arr, i, j + 1, index + 1);
      if (res) {
        return true;
      }
      board[i][j] = word[index];
    } else {
      return false;
    }

    return false;

  }

};

let board = [["a", "a"]]
let word = "aa";

console.log(exist(board, word));