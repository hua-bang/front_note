// https://leetcode-cn.com/problems/implement-rand10-using-rand7/

/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
  var row, col, idx;
  do {
    row = rand7();
    col = rand7();
    idx = col + (row - 1) * 7;
  } while (idx > 40);
  return 1 + (idx - 1) % 10;
};