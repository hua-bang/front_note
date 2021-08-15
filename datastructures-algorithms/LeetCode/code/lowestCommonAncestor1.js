function lowestCommonAncestor(root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
    if (root === null) {
      return false;
    }
    let lson = dfs(roo.left, p, q);
    let rson = dfs(root.right, p, q);
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root;
    }
    return lson || rson || (root.val === p.val) || (root.val === q.val);
  }

  dfs(root, p, q);
  return ans;
}