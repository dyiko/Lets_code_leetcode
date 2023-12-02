//1160. Find Words That Can Be Formed by Characters
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const count= new Array(26).fill(0);
    let res=0;
    for (let ch of chars){
        count[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for (let word of words){
        if (form(word,count)){
            res+=word.length
        }
    }
    return res;
    function form(word,count){
        const c= new Array(26).fill(0);
        for(let ch of word){
            const q=ch.charCodeAt(0)-'a'.charCodeAt(0);
            c[q]++;
            if (c[q]>count[q]){
                return false
            }
        }
        return true
    }
    
};