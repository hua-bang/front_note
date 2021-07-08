// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/59zt5i/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) {
    return [];
  }
  let stack = [];
  stack.push(root);
  
  while (stack.length) {
    let node = stack.pop();
    swap(node);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return root;
};

function swap(node) {
  let tempNode = node.left;
  node.left = node.right;
  node.right = tempNode;
}