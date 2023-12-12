//1464. Maximum Product of Two Elements in an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res=0;
    let maxi=nums[0];
    let len=nums.length
    for (let i=1;i<len;i++){
        res=Math.max(res,(maxi-1)*(nums[i]-1));
        maxi=Math.max(maxi,nums[i]);
    }
    return res;
};