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


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let ancestor = root;
  while (true) {
    if (p.val < ancestor.val && q.val < ancestor.val) {
      ancestor = ancestor.left;
    }
    else if (p.val > ancestor.val && q.val > ancestor.val) {
      ancestor = ancestor.right;
    } else {
      break;
    }
  }
  return ancestor;
};