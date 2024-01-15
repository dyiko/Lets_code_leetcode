//2225. Find Players With Zero or One Losses
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const len = matches.length;
    const m = 100001;
    const arr1 = new Array(m).fill(0);
    const arr2 = new Array(m).fill(0);
    const ans = [[], []];

    for (let i = 0; i < len; i++) {
        const [p,q] = matches[i];
        arr1[p]++;
        arr2[q]++;
    }

    for (let i = 0; i < m; i++) {
        const p = arr1[i];
        const q = arr2[i];
        if (p > 0 && q === 0) {
            ans[0].push(i);
        }
        if (q === 1) {
            ans[1].push(i);
        }
    }
    
    return ans;
};