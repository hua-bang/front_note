// 实现一个函数`countLongest(tree)`，输入一棵二叉树，返回二叉树中距离最长的两个叶子节点之间的距离。

// 样例：

// ```javascript
// var tree1 = {
//     value: 1,
//     left: {
//         value: 2
//     },
//     right: {
//         value: 3
//     }
// }
// countLongest(tree1) // 2

// var tree2 = {
//     value: 1,
//     left: {
//         value: 2,
//         left: {
//             value: 3,
//             left: {
//                 value: 6
//             }
//         },
//         right: {
//             value: 4
//         }
//     },
//     right: {
//         value: 5
//     }
// }
// countLongest(tree2) // 4
// ```

// 递归
let countLongest = (root) => {
    // 根节点自身路径长度
    let ans = 1;

    function depth(node) {
        if(!node) {
            return 0;
        }

        // 左子树的深度
        let lHight = depth(node.left);
        // 右子树的深度
        let rHight = depth(node.right);

        // lHight + rHight + 1 表示最左到最右侧节点的最长路径 
        // 记录下最长的路径
        ans = Math.max(ans, lHight + rHight + 1);

        return Math.max(lHight, rHight) + 1;
    }

    depth(root);

    return ans - 1;
}