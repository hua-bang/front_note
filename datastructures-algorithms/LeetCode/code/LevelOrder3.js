// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/5vnp91/

function levelOrder(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];
  let count = 0;
  
  while (queue.length) {
    let len = queue.length;
    res.push([]);
    count ++;

    while (len--) {
      let node = queue.shift();
      if (count % 2) {
        res[res.length - 1].unshift(node.val); 
      } else {
        res[res.length - 1].push(node.val); 
      }
      
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
    }
  }

  return res;
}