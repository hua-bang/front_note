function isBalanced(root) {
  if(!root) {
    return true;
  }else {
    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
  }

  function depth(node) {
    if(!node) {
      return 0;
    }
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);
    return (leftDepth > rightDepth ? leftDepth : rightDepth)  + 1;
  }
}

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