/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const copy = [];
  const rowLen = matrix.length;
  for (let r = 0; r < rowLen; r++) {
    copy[r] = []
    const row = matrix[r];
    const colLen = row.length;
    for (let c = 0; c < colLen; c++) {
      const col = row[c];
      copy[r][c] = matrix[r][c];
    }
  }
  for (let r = 0; r < rowLen; r++) {
    const row = matrix[r];
    const colLen = row.length;
    for (let c = 0; c < colLen; c++) {
      const col = row[c];
      matrix[r][c] = copy[rowLen - c - 1][r];
    }
  }
  return matrix;
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

// 0, 2 -> 0, 0