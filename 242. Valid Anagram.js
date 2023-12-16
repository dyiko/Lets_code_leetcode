//242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length!==t.length){
        return false
    }
    const hashing=new Map();
    for (let char of s){
        hashing.set(char,(hashing.get(char)||0)+1);
    }
    for (let char of t){
        if(!hashing.has(char)||hashing.get(char)===0){
            return false
        }
        hashing.set(char,hashing.get(char)-1);
    }
    return true;
};