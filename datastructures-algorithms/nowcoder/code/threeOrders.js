/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
function threeOrders( root ) {
    
}

function preOrder(root) {
  let stack = [];
  let res = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  };

  return res;
}

module.exports = {
    threeOrders : threeOrders
};