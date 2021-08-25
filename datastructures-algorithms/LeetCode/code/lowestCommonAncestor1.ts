class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.right = (right === undefined ? null : right)
  }
}

function lowestCommonAncestor1(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }
  if (p === null) {
    return q;
  }
  if (q === null) {
    return p;
  }

  let head = root;
  while (head) {
    if (head.val > p.val && head.val > q.val) {
      head = head.left;
    } else if (head.val < p.val && head.val < q.val) {
      head = head.right;
    } else {
      return head;
    }
  }
  return root;
};

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let ans;
  function dfs(root, p, q) {
    if (!root) {
      return false;
    }
    let lson = dfs(root.left, p, q);
    let rson = dfs(root.right, p, q);
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root;
    }
    return lson || rson || (root.val === p.val) || (root.val === q.val);
  }
  dfs(root, p, q);
  return ans;
};