// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/5dy6pt/

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const res = [];
  if (root) {
    pathSumSolu(root, target, [], 0, res);
  }
  return res;
};

const pathSumSolu = (node, target, stack, sum, res) => {
  stack.push(node.val);
  sum += node.val;

  if (!node.left && !node.right && sum === target) {
    res.push(stack.slice(0));
  }

  node.left && pathSumSolu(node.left, target, stack, sum, res);
  node.right && pathSumSolu(node.right, target, stack, sum, res); 

  stack.pop();
}