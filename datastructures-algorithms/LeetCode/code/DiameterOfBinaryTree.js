// https://leetcode-cn.com/problems/diameter-of-binary-tree/
// 思路: 1. 一个节点上的直径应该等于这个节点上访问最多的节点个数-1
//      2. 设该节点的左节点的最深为L， 右节点的最深为R，则该节点最深为L+R+1
//      3. 记录下最大访问的节点数，-1既可以返回

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
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }

  let max = 0;

  function depth(root) {
    if (!root) {
      return 0;
    }

    let L = depth(root.left);
    let R = depth(root.right);

    max = max < (L + R + 1) ? (L + R + 1) : max;
    return (L > R ? L : R) + 1;
  }
  depth(root);

  return max - 1;
};