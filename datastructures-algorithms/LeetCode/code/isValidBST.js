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
 * @return {boolean}
 */
 var isValidBST = function(root) {

    function isValidBSTInRange(root, minVal, maxVal) {
        if(root === null) {
            return true;
        }
        if(root.val < minVal || root.val > maxVal) {
            return false;
        }

        return isValidBSTInRange(root.left, minVal, root.val) && isValidBSTInRange(root.right, root.val, maxVal);
    }

    return isValidBSTInRange(root, -Infinity, Infinity);
};