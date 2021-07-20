// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if(!root) {
    return root;
  }
  let head = root;
  let stack = [];
  let res = [];

  while(head || stack.length) {
    while(head) {
      stack.push(head);
      head = head.left;
    }
    head = stack.pop();
    res.push(head);
    head = head.right;
  }

  root = head = res.shift();
  if(res.length == 0) {
    root.left = root;
    root.right = root;
    return root;
  }
  res.reduce((prev, current) => {
    prev.right = current;
    current.left = prev;
    return prev.right;
  }, head);
  root.left = res[res.length - 1];
  res[res.length - 1].right = root;
  return root
};