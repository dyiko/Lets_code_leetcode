//2482. Difference Between Ones and Zeros in Row and Column
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            rows[i] += grid[i][j];
            cols[j] += grid[i][j];
        }
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            grid[i][j] = 2 * (rows[i] + cols[j]) - m - n;
        }
    }

    return grid;
