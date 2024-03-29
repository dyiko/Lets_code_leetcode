//Count Subarrays Where Max Element Appears at Least K Times
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let mx = Math.max(...nums);
    let ans = 0;
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        k -= nums[right] === mx ? 1 : 0;
        right++;
        while (k === 0) {
            k += nums[left] === mx ? 1 : 0;
            left++;
        }
        ans += left;
    }

    return ans;
};