//76. Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || s.length < t.length) return "";
    const map = new Map();
    for (const c of t) {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }
    let count = 0;
    let start = 0;
    let minlength = Infinity;
    let minleft = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) - 1);
            if (map.get(s[i]) >= 0) {
                count++;
            }
        }
        while (count === t.length) {
            if (minlength > i - start + 1) {
                minlength = i - start + 1;
                minleft = start;
            }
            if (map.has(s[start])) {
                map.set(s[start], map.get(s[start]) + 1);
                if (map.get(s[start]) > 0) {
                    count--;
                }
            }
            start++;
        }
    }
    if (minlength > s.length) return "";
    return s.substring(minleft, minleft + minlength);
};