//543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
    let max= 0
    const getHeight=(root)=>{
        if(!root){
            return 0
        }
        const l = getHeight(root.left)
        const r = getHeight(root.right)
        max = Math.max(max,l+r)
        return Math.max(l,r)+1
    }
    const k = getHeight(root.left) + getHeight(root.right)
    return Math.max(k,max)
};