() => {
  class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
    }
  }


  function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
      return [];
    }
    const res: number[][] = [];
    let queue: TreeNode[] = [root];
    let flag:Boolean = true;
    while (queue.length) {
      let length = queue.length;
      let arr: number[] = [];
      while (length--) {
        let node = queue.shift();
        arr.push(node.val);
        if (!flag) {
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
        } else {
          node.right && queue.push(node.right);
          node.left && queue.push(node.left);
        }
      }
      flag = !flag
      res.push(arr);
    }
    return res;
  };
};