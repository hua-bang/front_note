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


function pathSum(root: TreeNode | null, target: number): number[][] {
  const res: number[][] = [];
  reduc(root, target, []);

  function reduc(root: TreeNode, target: number, arr: number[]): void{
    if (root === null) {
      return;
    }
    if (root.val === target && !root.left && !root.right) {
      arr.push(root.val);
      res.push(arr);
      return;
    }
    arr.push(root.val);
    reduc(root.left, target - root.val, arr.slice(0));
    reduc(root.right, target - root.val, arr.slice(0));
  }

  return res;
};