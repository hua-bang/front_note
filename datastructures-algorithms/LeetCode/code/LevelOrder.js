// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/9ackoe/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if(!root) {
    return [];
  }
  const queue = [];
  queue.push(root);
  const res= [];

  while(queue.length) {
    let node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return res;
};