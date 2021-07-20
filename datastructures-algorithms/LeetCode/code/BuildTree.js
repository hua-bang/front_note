function buildTree(preorder, inorder) {
  let n = preorder.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }
  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);




  function myBuildTree(preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
    if (preorder_left > preorder_right) {
      return null;  
    }

    let preorder_root = preorder_left;
    let inorder_root = map.get(preorder[preorder_root]);

    let root = new TreeNode(preorder[preorder_root]);

    let size_left_subtree = inorder_root - inorder_left;

    root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1);
    root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right);
  }
}