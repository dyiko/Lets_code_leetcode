//606. Construct String from Binary Tree
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
 * @return {string}
 */
var tree2str = function(root) {
    res=[];
    function preorder(root){
        if (!root){
            return;
        }
        res.push("(");
        res.push(root.val);
        if (!root.left &&root.right){
            res.push("()")
        }
        preorder(root.left);
        preorder(root.right);
        res.push(")");
    }
    preorder(root);
    return res.slice(1,-1).join("")
};