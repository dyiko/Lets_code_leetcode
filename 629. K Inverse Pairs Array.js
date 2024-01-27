//629. K Inverse Pairs Array
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const M = 1e9 + 7;
    let dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        let prefixSum = 0;
        for (let j = 0; j <= k; j++) {
            prefixSum = (prefixSum + dp[i - 1][j]) % M;
            if (j - i >= 0) {
                prefixSum = (prefixSum - dp[i - 1][j - i] + M) % M;
            }
            dp[i][j] = (dp[i][j] + prefixSum) % M;
        }
    }

    return dp[n][k];
};