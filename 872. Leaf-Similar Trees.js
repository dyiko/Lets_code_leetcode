//872. Leaf-Similar Trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
    function collectLeafValues(root, leafValues) {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            leafValues.push(root.val);
        }
        collectLeafValues(root.left, leafValues);
        collectLeafValues(root.right, leafValues);
    }

    function arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }

    const leafValues1 = [];
    const leafValues2 = [];
    collectLeafValues(root1, leafValues1);
    collectLeafValues(root2, leafValues2);

    return arraysAreEqual(leafValues1, leafValues2);
}