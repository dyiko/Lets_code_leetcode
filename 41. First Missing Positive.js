//41. First Missing Positive
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const numSet = new Set(nums.filter(num => num > 0)); 
    let i = 1;
    while (numSet.has(i)) {
        i++;
    }
    return i;
};