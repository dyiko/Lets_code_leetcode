/**
//1688. Count of Matches in Tournament 
* @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let res=0;
    while (n>1){
        let evenTeam=n/2;
        let oddTeam=(n - 1) / 2;
        if (evenTeam===0){
        res+=evenTeam
        n=evenTeam
        }else{
         res+=oddTeam
         n=oddTeam+1
      } 
    }
    return res;
       
};