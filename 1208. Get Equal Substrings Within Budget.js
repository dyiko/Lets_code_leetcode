//1208. Get Equal Substrings Within Budget
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let l = 0, c = 0, res = 0;

    for (let r = 0; r < s.length; r++) {
        c += Math.abs(s.charCodeAt(r) - t.charCodeAt(r));

        while (c > maxCost) {
            c -= Math.abs(s.charCodeAt(l) - t.charCodeAt(l));
            l++;
        }

        res = Math.max(res, r - l + 1);
    }

    return res;
};