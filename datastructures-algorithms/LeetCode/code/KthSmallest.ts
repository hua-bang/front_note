
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function kthSmallest(root: TreeNode | null, k: number): number {
  let stack: TreeNode[] = [];
  let count = 1;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    if (count++ === k) {
      return node.val;
    }
    if (node.right) {
      root = node.right;
    }
  };
  return -1;
};