/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let head = root;
  let val = root.val;

  if(!root) {
    return -1;
  }
  
  let stack = [];
  stack.push(head);

  while(stack.length) {
    let node = stack.pop();
    let left = node.left;
    let right = node.right;
    if(left && right) {
      if(left.val !== right.val) {
        let bigVal = node.left.val < node.right.val ? node.right.val : node.left.val;
        let smallNode = node.left.val < node.right.val ? node.left : node.right;
        if(val === root.val) {
          val = bigVal;
        }else {
          val = bigVal < val ? bigVal : val;
        }
        stack.push(smallNode);
      }else {
        stack.push(left, right);
      }
    }
  }


  if(root.val === val) {
    return -1;
  }

  return val;
};

var findSecondMinimumValue = function (root) {
  let ans = -1, val = root.val;
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();
    
    if (node.val > val) {
      if (ans === -1) {
        ans = node.val;
      } else {
        ans = node.val < ans ? node.val : ans;
      }
    } else {
      if (node.left && node.right) {
        stack.push(node.left, node.right);
      }
    }
  }

  return ans;
}