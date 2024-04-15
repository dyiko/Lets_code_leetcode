//129. Sum Root to Leaf Numbers
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
const sumNumbers = function(root) {
     return dfs(root, 0);
};
const dfs = function(node, num) {
    if (!node) return 0;
    if (!node.left && !node.right) {
        return num * 10 + node.val;
    }
    return dfs(node.left, num * 10 + node.val) + dfs(node.right, num * 10 + node.val);
};