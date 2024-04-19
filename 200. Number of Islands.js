//200. Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let counter = 0;
    for (let k = 0; k < grid.length; k++) {
        for (i = 0; i < grid[k].length; i++) {
            if (grid[k][i] === '1') {
                dfs(grid, k, i, counter);
                counter++;
            }
        }
    }

    return counter
};
const dfs = function (grid, k, i, counter) {
    if (grid?.[k]?.[i] !== '1') {
        return;
    }

    grid[k][i] = counter;
    dfs(grid, k + 1, i, counter);
    dfs(grid, k - 1, i, counter);
    dfs(grid, k, i + 1, counter);
    dfs(grid, k, i - 1, counter);
};