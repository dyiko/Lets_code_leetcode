//623. Add One Row to Tree
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        return new TreeNode(val, root);
    }
    const queue = [{node: root, nodeDepth: 1}];
    
    while (queue.length > 0) {
        let { node, nodeDepth } = queue.shift();
        if (nodeDepth === depth - 1) {
            let newLeftNode = new TreeNode(val, node.left, null);
            node.left = newLeftNode;
            let newRightNode = new TreeNode(val, null, node.right);
            node.right = newRightNode;
        } else {
            if (node.left) queue.push({node: node.left, nodeDepth: nodeDepth + 1});
            if (node.right) queue.push({node: node.right, nodeDepth: nodeDepth + 1});
        }
    }
    return root;
};