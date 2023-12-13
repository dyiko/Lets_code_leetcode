//1582. Special Positions in a Binary Matrix
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let ans=0;
    let m=mat.length;
    let n=mat[0].length;
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            if (mat[i][j]===0){
                continue;
            }
            let flagg=true;
            for (let p=0;p<m;p++){
                if (p!==i && mat[p][j]===1){
                    flagg=false;
                    break;
                }
            }
            for (let q=0;q<n;q++){
                if (q!==j && mat[i][q]===1){
                    flagg=false;
                    break;
                }
            }
            if (flagg){
                ans++
            }
        }
    }
    return ans;
};