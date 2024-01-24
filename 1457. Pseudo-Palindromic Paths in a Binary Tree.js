//1457. Pseudo-Palindromic Paths in a Binary Tree
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
var pseudoPalindromicPaths  = function(root) {
    let count = 0;
    let stack = [[root, 0]];
    while (stack.length > 0) {
        let [node, path] = stack.pop();
        if (node !== null) {
            path ^= 1 << node.val;

            if (node.left === null && node.right === null) {
                if ((path & (path - 1)) === 0) {
                    count += 1;
                }
            } else {
                stack.push([node.right, path]);
                stack.push([node.left, path]);
            }
        }
    }
    return count;
};