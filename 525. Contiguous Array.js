//525. Contiguous Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0;
    let maxi = 0;
    const map = new Map();
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            sum += -1;
        } else if (nums[i] === 1) {
            sum += 1;
        }
        
        if (map.has(sum)) {
            let index = map.get(sum);
            let len = i - index;
            maxi = Math.max(maxi, len);
        } else {
            map.set(sum, i);
        }
    }
    
    return maxi;
};