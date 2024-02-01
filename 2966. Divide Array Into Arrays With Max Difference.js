//2966. Divide Array Into Arrays With Max Difference
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 3; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) return [];
        res.push([nums[i - 2], nums[i - 1], nums[i]]);
    }
    return res;
};