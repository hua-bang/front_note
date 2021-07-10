function postorderTraversal(root) {
  if (!root) {
    return [];
  }

  const res = [];
  dfs(root);

  function dfs(root) {
    root.left && dfs(root.left);
    root.right && dfs(root.right);
    res.push(root.val);
  }

  return res;
}

function postorderTraversal(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  

  return res.reverse();
}
