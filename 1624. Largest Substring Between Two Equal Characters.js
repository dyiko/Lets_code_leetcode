//1624. Largest Substring Between Two Equal Characters
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let ans=-1;
    for (let i=0;i<s.length;i++){
        for (let j=i+1;j<s.length;j++){
            if (s[i]===s[j]){
                ans=Math.max(ans,j-i-1)
            }
        }
    }
    return ans;
};