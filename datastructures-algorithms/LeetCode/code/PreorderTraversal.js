// 递归 O(n) 

function preorderTraversal(root) {
  
  if (!root) {
    return [];
  }
  
  const res = [];
  preorder(root);

  function preorder(root) {
    res.push(root.val);
    if (root.left) {
      preorder(root.left);
    }
    if (root.right) {
      preorder(root.right);
    }
  }

  return res;
}

function preorderTraversal(root) {
  
  if (!root) {
    return [];
  }
  
  const res = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
}

