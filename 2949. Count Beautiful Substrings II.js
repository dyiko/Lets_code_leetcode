//2949. Count Beautiful Substrings II

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    const n=s.length;
    const vowels =new Set(['a','e','i','o','u']);
    let i=1;
    while (i*i%k!==0){
        i++;
    }
    const q=i*2;
    const p=Array.from({length:q},()=>({}));
    p[q-1][0]=1;
    let res=0;
    let v=0;
    for (let i=0;i<n;i++){
        v+=vowels.has(s[i]) ?1:-1;
        res += p[i%q][v]||0;
        p[i%q][v]=(p[i%q][v]||0)+1;
    }
    return res;
};