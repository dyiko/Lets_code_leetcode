//238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const pre = new Array(n).fill(1);
    const suf= new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suf[i] = suf[i + 1] * nums[i + 1];
    }
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = pre[i] * suf[i];
    }
    return answer;
};