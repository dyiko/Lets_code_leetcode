//931. Minimum Falling Path Sum
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const x = matrix.length;
    const y = matrix[0].length; 
    let prevRow = matrix[0].slice();  
    for (let p = 1; p < x; p++) {
        const currRow = [];
        for (let q = 0; q < y; q++) {
            const curr = matrix[p][q];
            const top = curr + prevRow[q];
            const topL = curr + (prevRow[q - 1] || Infinity);
            const topR = curr + (prevRow[q + 1] || Infinity);
            currRow[q] = Math.min(top, topL, topR);
        }
        prevRow = currRow; 
    }
    return Math.min(...prevRow);
};