//661. Image Smoother
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  const ROWS = img.length;
  const COLS = img[0].length;

  const result = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(0));

  const calculateAverage = (r, c) => {
    let total = 0,
      cnt = 0;

    for (let i = r - 1; i < r + 2; i++) {
      for (let j = c - 1; j < c + 2; j++) {
        if (i >= 0 && i < ROWS && j >= 0 && j < COLS) {
          total += img[i][j];
          cnt += 1;
        }
      }
    }

    return Math.floor(total / cnt);
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      result[r][c] = calculateAverage(r, c);
    }
  }

  return result;
};

