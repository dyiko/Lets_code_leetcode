645. Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let d = -1, mis = -1;
    for (let i = 1; i <= nums.length; i++) {
        let count = nums.filter(num => num === i).length;
        if (count === 2) {
            d = i;
        } else if (count === 0) {
            mis = i;
        }
    }
    return [d, mis];
};