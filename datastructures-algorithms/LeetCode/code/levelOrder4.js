// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefh1i/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  
  const queue = [root];
  const res = [];

  while (queue.length) {
    let length = queue.length;
    res.push([]);

    while (length) {
      let node = queue.shift();
      res[res.length - 1].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      length--;
    }
  }
  return res;
};