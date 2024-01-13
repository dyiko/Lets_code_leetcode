//1347. Minimum Number of Steps to Make Two Strings Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const counts = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
      counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    let res = 0;

    for (const count of counts) {
      if (count > 0) {
        res += count;
      }
    }

    return res;
};