//2385. Amount of Time for Binary Tree to Be Infected
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let tt=0;
    const traverse=(root,start)=>{
        if (!root){
            return 0;
        }
        let left =traverse(root.left,start);
        let right=traverse(root.right,start);
        if (root.val===start){
            tt=Math.max(left,right);
            return -1;
        }
        else if (left>=0 && right>=0){
            return Math.max(left,right)+1;
        }
        else{
            tt=Math.max(tt,Math.abs(left-right));
            return Math.min(left,right)-1;
        }
    }
    traverse(root,start)
    return tt;
};