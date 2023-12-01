//1662. Check If Two String Arrays are Equivalent

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const s1 = word1.join('');
    const s2 = word2.join('');
    if (s1===s2){
        return true;
    }
    return false;
};