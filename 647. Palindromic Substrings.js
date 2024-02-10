//647. Palindromic Substrings
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let tCount = 0;
    for (let i = 0; i < s.length; i++) {
        tCount += palindrome(s, i, i);
        tCount += palindrome(s, i, i + 1);
    }
    return tCount;
};
palindrome = (s, left, right) => {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
};