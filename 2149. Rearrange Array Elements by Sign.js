//2149. Rearrange Array Elements by Sign
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let v1 = [];
    let v2 = [];
    let ans = [];
    for (let num of nums) {
        if (num > 0) {
            v1.push(num);
        } else {
            v2.push(num);
        }
    }
    let in1 = 0;
    let in2 = 0;
    while (in2 < nums.length / 2) {
        ans.push(v1[in1]);
        in1++;
        ans.push(v2[in2]);
        in2++;
    }
    
    return ans;
};