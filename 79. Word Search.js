//79. Word Search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
   let n = board.length;
    let m = board[0].length;
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (depthFirstSearch(row, col, word, board))
                return true;
        }
    }
    return false; 
};
function depthFirstSearch(row, col, word, grid) {
    if (word.length == 0) return true;
    if (
        row < 0 ||
        row == grid.length ||
        col < 0 ||
        col == grid[0].length ||
        grid[row][col] != word[0]
    ) {
        return false;
    }
    let result = false;
    grid[row][col] = "*";
    let offsets = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    for (let offset of offsets) {
        let rowOffset = offset[0],
            colOffset = offset[1];
        result = depthFirstSearch(
            row + rowOffset,
            col + colOffset,
            word.substring(1),
            grid
        );
        if (result) break;
    }
    grid[row][col] = word[0];
    return result;
}