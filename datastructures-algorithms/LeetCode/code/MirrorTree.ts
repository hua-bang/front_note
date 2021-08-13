
class TreeNode {
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  let left = mirrorTree(root.left);
  let right = mirrorTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};