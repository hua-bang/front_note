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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let n = preorder.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }
  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);

  function myBuildTree(preorder: number[], inorder: number[], preorder_left: number, preorder_right: number, inorder_left: number, inorder_right: number): TreeNode | null {
    if (preorder_left > preorder_right) {
      return null;
    }

    let preorder_root = preorder_left;
    let inorder_root = map.get(preorder[preorder_left]);
    let root = new TreeNode(preorder[preorder_root]);
    let size_left_subTree = inorder_root - inorder_left;

    root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subTree, inorder_left, inorder_root - 1);
    root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subTree + 1, preorder_right, inorder_root + 1, inorder_right);
    return root;
   }
};