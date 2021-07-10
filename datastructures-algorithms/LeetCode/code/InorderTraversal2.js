
function inorderTraversal(root) {
  if (root === null) {
    return [];
  }
  const res = [];

  dfs(root);

  function dfs(root) {
    root.left && dfs(root.left);
    res.push(root.val);
    root.right && dfs(root.right);
  }
  return res;
}

function inorderTraversal(root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const res = [];

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
}