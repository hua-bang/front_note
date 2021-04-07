// https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnd69e/

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
 var maxDepth = function(root) {
    return root === null ? 0 : ( Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 )
};