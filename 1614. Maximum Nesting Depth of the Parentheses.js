//1614. Maximum Nesting Depth of the Parentheses
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let  count =0;
    let maxN=0;
    for (let c of s){
        if (c==='('){
            count++
            if (maxN<count){
                maxN=count
            }
        }else if (c===')'){
            count--
        }
    }
    return maxN
};