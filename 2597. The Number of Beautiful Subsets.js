//2597. The Number of Beautiful Subsets
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    const beauty = [[]];
    for (const l of nums) {
        beauty.push(...beauty.filter(s => !s.includes(l - k) && !s.includes(l + k)).map(s => [...s, l]));
    }
    return beauty.length - 1;
};