//1239. Maximum Length of a Concatenated String with Unique Characters
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let dp = [0];
    let res = 0;

    for (let s of arr) {
        let a = 0, dup = 0;

        for (let c of s) {
            const bit = 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
            dup |= a & bit;
            a |= bit;
        }

        if (dup === 0) {
            const len = dp.length;
            for (let i = len - 1; i >= 0; i--) {
                const newSet = dp[i] | a;
                if ((dp[i] & a) === 0) {
                    dp.push(newSet);
                    res = Math.max(res, newSet.toString(2).split('1').length - 1);
                }
            }
        }
    }

    return res;
};