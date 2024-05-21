78. Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const sub = [];

    const createSub = function(i) {
        if (i === nums.length) {
            res.push([...sub]);
            return;
        }
        sub.push(nums[i]);
        createSub(i + 1);
        sub.pop();
        createSub(i + 1);
    };
    createSub(0);
    return res;    
};