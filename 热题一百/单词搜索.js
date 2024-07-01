/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  let res = false;
  const arr = [];
  function traceback(startRow, startCol, path) {
    const key = startRow + '-' + startCol;

    const curStr = path.map(item => Object.values(item)[0]).join('') + board[startRow][startCol];
    console.log(curStr);
    if (path.length > word.length) return;
    if (curStr === word) {
      res = true;
      return true;
    }
    for (let i = startRow; i < m; i++) {
      if (res) return;
      for (let j = startCol; j < n; j++) {
        path.push({[i + '-' + j]: board[i][j]});
        if (j + 1 < n && !path.find(item => `${i}-${j+1}` in item)) traceback(i, j + 1, path);
        path.pop();
        path.push({[i + '-' + j]: board[i][j]});
        if (i + 1 < m && !path.find(item => `${i+1}-${j}` in item)) traceback(i + 1, j, path);
        path.pop();
        if (i - 1 >= 0 && !path.find(item => `${i-1}-${j}` in item)) {
          
        }
        traceback(i - 1, j, path);
        path.pop();
        path.push({[i + '-' + j]: board[i][j]});
        if (j - 1 >= 0 && !path.find(item => `${i}-${j-1}` in item)) traceback(i, j - 1, path);
        path.pop();
        if (res) return;
      }
    }
  }

  traceback(0, 0, []);
  return res;
};

console.log(exist(["a","a"], "aaa"));