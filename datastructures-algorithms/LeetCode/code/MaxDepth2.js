// https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoh1zg/

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let maxDepth = 0;
  maxNumDepth(root, 1);

  function maxNumDepth(root, depth) {
    if (!root.left && !root.right) {
      maxDepth = Math.max(maxDepth, depth);
    }

    root.left && maxNumDepth(root.left, depth + 1);
    root.right && maxNumDepth(root.right, depth + 1);
  }
  return maxDepth;
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
};

