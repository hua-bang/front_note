function maxDepth(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let max = 1;

  maxNumDepth(root, 1);

  function maxNumDepth(root, depth) {
    if (!root.left && !root.right) {
      max = Math.max(max, depth);
    }
    root.left && maxNumDepth(root.left, depth + 1);
    root.right && maxNumDepth(root.right, depth + 1);
  }
  return max;
}