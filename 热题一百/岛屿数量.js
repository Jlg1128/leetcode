/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  const map = new Map();
  const visited = {};
  function traverse(i, j, key) {
    if (i >= m || j >= n || visited[i + '-' + j]) {
      return;
    }
    visited[i + '-' + j] = true;
    const right = grid[i][j+1];
    const down = (grid[i+1] || [])[j];
    console.log(i, j);
    if (grid[i][j] === '1') {
      if (down !== '1' && right !== '1' && !map.has(key)) {
        map.set(key, true);
        res += 1;
      }
    }
    if (j+1 === m) {
      traverse(i+1, j, down === '0' ? i + '-' + j : key);
      // traverse(i + 1, j+1, down === '0' ? i + '-' + j : key);
    } else {
      // traverse(i+1, j, down === '0' ? i + '-' + j : key);
      traverse(i, j+1, right === '0' ? i + '-' + j : key);
    }
  }
  traverse(0, 0, '0-0')
  return res;
};

// console.log(numIslands([
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]));

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));


