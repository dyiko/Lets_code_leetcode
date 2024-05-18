//979. Distribute Coins in Binary Tree
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
var distributeCoins = function(root) {
    let move = 0;
    function dfs(node) {
        if (!node) return 0;
        let lExcess = dfs(node.left);
        let rExcess = dfs(node.right);
        move += Math.abs(lExcess) + Math.abs(rExcess);
        return node.val + lExcess + rExcess - 1;
    }
    dfs(root);
    return move;
};