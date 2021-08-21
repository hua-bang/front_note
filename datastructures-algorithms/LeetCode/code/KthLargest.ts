/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthLargest(root: TreeNode | null, k: number): number {
  if (!root) {
    return -1;
  }
  let stack = [];
  let res = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    res.push(node.val);
    root = node.right;
  }
  return res[res.length - k];
};