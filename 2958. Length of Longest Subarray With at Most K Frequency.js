//2958. Length of Longest Subarray With at Most K Frequency
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
        const x= {};
        let len = 0;
        let i = 0;
        let j = 0;
        const nlen = nums.length;
        while (j < nlen) {
            x[nums[j]] = (x[nums[j]] || 0) + 1;
            while (x[nums[j]] > k) {
                x[nums[i]] -= 1;
                i += 1;
            }
            len = Math.max(len, j - i + 1);
            j += 1;
        }
        return len;
};