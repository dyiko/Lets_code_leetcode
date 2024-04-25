//2370. Longest Ideal Subsequence
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    const memo = new Array(32).fill(0)
    let max = 1
    for (let i = 0;  i < s.length; i++){
        const curr = s.charCodeAt(i) - 97
        let start = curr - k
        let end = curr + k
        let currMax = 0
        if (start < 0) start = 0
        if (end > 31) end = 31
        for (let j = start; j <= end; j++){
            currMax = Math.max(currMax, memo[j])
        }
        memo[curr] = currMax + 1
        max = Math.max(max, memo[curr])
    }
    return max 
};