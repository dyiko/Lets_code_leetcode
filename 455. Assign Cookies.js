//455. Assign Cookies
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let count = 0;
    for (let i=0;i<s.length&& count < g.length;i++){
        if (s[i]>=g[count]){
            count++;
        }
        
    }
    return count;
};