//1915. Number of Wonderful Substrings
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let count=0;
    const n=word.length;
    const freq = new Array(1024).fill(0);
    freq[0]=1;
    let bitm =0;
    for (let i=0;i<n;i++){
        const charIndex =word.charCodeAt(i) - "a".charCodeAt();
        bitm^=1<<charIndex;
        count+=freq[bitm];
        for (let j=0;j<10;j++){
            const newBitm=bitm^(1<<j);
            count+=freq[newBitm];
        }
        freq[bitm]++;
    }
    return count;
};