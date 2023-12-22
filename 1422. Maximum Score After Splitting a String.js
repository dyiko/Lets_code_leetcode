//1422. Maximum Score After Splitting a String
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let res=0;
    let left=0;
    let right=s.split('1').length-1;
    for (let i=0;i<s.length-1;i++){
        if (s[i]==='0'){
            left+=1         
        }
        else if (s[i]==='1'){
            right-=1           
        }
        
        res=Math.max(res,left+right);
    }
    return res; 

};