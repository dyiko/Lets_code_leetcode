//977. Squares of a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((a) => a ** 2).sort((a, b) => a - b);
};