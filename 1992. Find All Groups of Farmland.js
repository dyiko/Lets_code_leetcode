1992. Find All Groups of Farmland
const numRows = land.length;
    const numCols = land[0].length;
    
    const result = [];
    
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            // Process land with 1s only
            if (land[i][j] === 0) continue;

            // Find rightmost column of rectangle
            let c2 = j;
            while (c2 < numCols && land[i][c2] === 1) {
                c2++;
            }

            // Find bottommost row of rectangle
            let r2 = i;
            while (r2 < numRows && land[r2][j] === 1) {
                r2++;
            }

            // Adjust to get bottom right corner
            c2 = c2 === 0 ? c2 : c2 - 1;
            r2 = r2 === 0 ? r2 : r2 - 1;

            // Store coordinates [r1, c1, r2, c2]
            result.push([i, j, r2, c2]);

            // Mark covered land as 0
            for (let k = i; k <= r2; k++) {
                for (let l = j; l <= c2; l++) {
                    land[k][l] = 0;
                }
            }
        }
    }
    
    return result;