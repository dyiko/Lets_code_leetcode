387. First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let res = {};
    for (let a of s) {
        res[a] = (res[a] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (res[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};