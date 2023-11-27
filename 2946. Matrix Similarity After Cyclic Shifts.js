//2946. Matrix Similarity After Cyclic Shifts

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    for (let l of mat){
        let n=l.length;
        for (let i=0;i<n;++i){
            if (l[i]!==l[(i+k)%n]){
                return false;
            }
        }
    }
    return true;
};