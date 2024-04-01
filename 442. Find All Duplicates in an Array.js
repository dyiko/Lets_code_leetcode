//442. Find All Duplicates in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const res = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
          const num = Math.abs(nums[i]);
          const idx = num - 1;
          if (nums[idx] < 0)
               res.push(num);
           nums[idx] *= -1;
     }
     return res;
};