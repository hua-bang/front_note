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


function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (root.left === null && root.right === null) {
    return true;
  }

  return reduc(root.left, root.right);

  function reduc(a: TreeNode, b: TreeNode) {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    
    if (a.val !== b.val) {
      return false;
    }
    return reduc(a.left, b.right) && reduc(a.right, b.left);
  }

};