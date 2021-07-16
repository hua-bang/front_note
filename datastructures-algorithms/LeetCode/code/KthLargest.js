function kthLargest(root, k) {
  if (!root) {
    return -1;
  }
  let stack = [];

  while (root && stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (k == 0) {
      return root.val;
    }
    root = root.right;
    k--;
  }
  return -1;
}