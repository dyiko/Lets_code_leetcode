//1897. Redistribute Characters to Make All Strings Equal
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const charCount = {};
    const numWords = words.length;
    for (const word of words) {
        for (const char of word) {
             charCount[char] = (charCount[char] || 0) + 1;
             }
    }
    for (const count of Object.values(charCount)) {
        if (count % numWords !== 0) {
                return false;
            }
    }
    return true;
};