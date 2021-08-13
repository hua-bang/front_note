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


function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B === null || A === null) {
    return false;
  }

  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);

  function recur(A: TreeNode, B: TreeNode) {
    if (B === null) {
      return true;
    }
    if (A === null || A.val !== B.val) {
      return false;
    }
    return recur(A.left, B.left) && recur(A.right, B.right);
  }
  
};