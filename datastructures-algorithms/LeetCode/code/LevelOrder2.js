// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/5vawr3/

const levelOrder = root => {
  if (!root) return [];
  const res = [];
    
  const q = [root];
  
  while (q.length) {
    let len = q.length;
    res.push([]);

    while (len--) {
      let node = q.shift();
      res[res.length - 1].push(node.val);

      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return res;
};


// const levelOrder = root => {
//     if (!root) return [];
//     const res = [];
//     // 根节点入队
//     const q = [root];
//     // 当队列还有值时，一直执行
//     while (q.length) {
//         let len = q.length;
//         res.push([]);
//         while (len--) {
//             // 获取根节点，根节点出队
//             const n = q.shift();
//             // 根节点加入res栈顶元素
//             res[res.length - 1].push(n.val);
//             // 队头左右节点入队
//             if (n.left) q.push(n.left);
//             if (n.right) q.push(n.right);
//         }
//     }
//     return res;
// };