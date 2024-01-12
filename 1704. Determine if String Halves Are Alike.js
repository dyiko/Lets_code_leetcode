//1704. Determine if String Halves Are Alike
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let ans = 0;
    const len=s.length
    const mid = Math.floor(len / 2);
    for (let i=0;i<mid;i++){
        const a =s[i];
        const b=s[mid+i];
        if (vowels.has(a)) ans++;
        if (vowels.has(b)) ans--;
    }
    return ans===0;
};