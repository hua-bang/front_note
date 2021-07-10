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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  // 节点为空 返回false
  if (!root) {
    return false;
  }

  // 叶子节点
  if (root.left === null && root.right === null) {
    // 相等 找到
    if (root.val === targetSum) {
      return true
    } else {
      // 不然 就是错误
      return false;
    }
  }
  
  // 左右 一个成立 即可
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right,targetSum - root.val);
};