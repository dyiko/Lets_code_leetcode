//1531. String Compression II
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLength(count) {
    if (count === 1) return 1;
    else if (count < 10) return 2;
    else if (count < 100) return 3;
    else return 4;
}
function getLengthOfOptimalCompression(s, k) {
    
    const dp = new Array(s.length + 1).fill(null).map(() => new Array(k + 1).fill(0));
    for (let i = s.length; i >= 0; i--) {
        for (let j = 0; j <= k; j++) {
            if (i === s.length) {
                dp[s.length][j] = 0;
                continue;
            }
            dp[i][j] = (j > 0) ? dp[i + 1][j - 1] : Number.MAX_VALUE;
            let possible_del = j;
            let count = 0;
            for (let end = i; end < s.length && possible_del >= 0; end++) {
                if (s.charAt(end) === s.charAt(i)) {
                    count++;
                    dp[i][j] = Math.min(dp[i][j], getLength(count) + dp[end + 1][possible_del]);
                } else {
                    possible_del--;
                }
            }
        }
    }
    return dp[0][k];
};