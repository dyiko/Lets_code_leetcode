//1026. Maximum Difference Between Node and Ancestor
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
var maxAncestorDiff =function(root, minVal = Infinity, maxVal = -Infinity) {
    if (!root)
        return 0;

    let diff = Math.max(maxVal - root.val, root.val - minVal);
    minVal = Math.min(minVal, root.val);
    maxVal = Math.max(maxVal, root.val);

    return Math.max(diff, 
        maxAncestorDiff(root.left, minVal, maxVal), 
        maxAncestorDiff(root.right, minVal, maxVal)
    );
};