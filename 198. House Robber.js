//198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let robed = 0;
    let notrobed = 0;
    for (let i = 0; i < nums.length; i++) {
        let newRob = notrobed + nums[i];
        let newNoRob = Math.max(notrobed, robed);
        robed = newRob;
        notrobed = newNoRob;
    }
    return Math.max(robed, notrobed);
};