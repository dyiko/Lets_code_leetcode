//165. Compare Version Numbers
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split(".");
    const v2=version2.split(".");
    let max=Math.max(v1.length,v2.length);
    for (let i=0;i<max;i++){
        if (v1[i]&&v2[i]){
            if (+v1[i]>+v2[i]){
                return 1;
            }
            else if (+v1[i]<+v2[i]){
                return -1;
            }
        }
        else if (v1[i]&& +v1[i]!==0){
            return 1;
        }else if (v2[i] && +v2[i]!==0){
            return -1
        }
    }
    return 0;
};