// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv7pir/

function inorderTraversal(root) {
    const res = [];
    const stack = [];

    while (root || stack.length) {

        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }

    return res;
}