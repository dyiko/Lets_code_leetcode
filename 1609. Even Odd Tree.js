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
var isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }
    let queue = [root];
    let level = 0;
    while (queue.length > 0) {
        let size = queue.length;
        let preVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if ((level % 2 === 0 && (node.val % 2 === 0 || node.val <= preVal)) ||
                (level % 2 === 1 && (node.val % 2 === 1 || node.val >= preVal))) {
                return false;
            }
            preVal = node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        level++;
    }
    return true;
};