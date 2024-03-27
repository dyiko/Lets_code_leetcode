713. Subarray Product Less Than K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    let len=nums.length;
    for(let i=0;i<len;i++){
        let prod = 1; 
        for(let j=i;j<len;j++){
            prod*= nums[j];
            if(prod<k){
                count++
            }else{
                break;
            }
        }
    }
    return count
};