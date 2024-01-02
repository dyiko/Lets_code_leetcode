//2610. Convert an Array Into a 2D Array With Conditions
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const freq = new Array(nums.length + 1).fill(0);
    const ans = [];

    for (const num of nums) {
        ans[freq[num]] ??= [];
        ans[freq[num]].push(num);
        freq[num]++;
    }

    return ans;
};