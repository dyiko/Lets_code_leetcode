//2444. Count Subarrays With Fixed Bounds
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let maxPosi = -1;
    let minPosi = -1;
    let lBound = -1;
    let ans= 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            lBound = i;
        }
        if (nums[i] === minK){
            minPosi = i;
        }  
        if (nums[i] === maxK){
            maxPosi = i;
        } 
        let validL = Math.min(maxPosi, minPosi) - lBound;
        if (validL > 0) {
            ans+= validL;
        }      
    }
    
    return ans;
};