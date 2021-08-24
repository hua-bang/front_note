
function isBalanced(root) {
  if (!root) {
    return true;
  }
  if (height(root) !== -1) {
    return true;
  }
  return false;
}

function height(node) {
  if (!node) {
    return 0;
  }
  let leftDepth = height(node.left);
  let rightDepth = height(node.right);

  if (leftDepth == -1 || rightDepth == -1 || (Math.abs(leftDepth - rightDepth) > 1)) {
    return -1;
  }
  return Math.max(leftDepth, rightDepth) + 1;
}