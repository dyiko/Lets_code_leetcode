//997. Find the Town Judge
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const inDegree = new Array(n + 1).fill(0);
    const outDegree = new Array(n + 1).fill(0);
    for (let c of trust) {
        outDegree[c[0]]++;
        inDegree[c[1]]++;
    }
    for (let i = 1; i <= n; ++i) {
        if (inDegree[i] === n - 1 && outDegree[i] === 0)
            return i;
    }
    return -1;
};