class UnionTree {
  count = 0;

  arr = [];

  size = [];

  constructor(n, count) {
    this.arr = Array.from({length: n}, (item, index) => index);
    this.size = Array.from({length: n}).fill(0);
    this.count = count;
  }

  find(t) {
    while (true) {
      if (t === this.arr[t]) {
        return t;
      }
      t = this.arr[t];
    }
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;
    if (this.size[rootP] < this.size[rootQ]) {
      this.arr[rootP] = this.arr[rootQ]
      this.size[rootQ] += this.size[rootP];
    } else {
      this.arr[rootQ] = this.arr[rootP];
      this.size[rootP] += this.size[rootQ];
    }
    this.count --;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let ans = 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count ++;
      }
    }
  }
  const unionTree = new UnionTree(m * n, count);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const cur = grid[i][j];
      if (cur === '1') {
        grid[i][j] = '0';
        const right = grid[i][j + 1];
        const left = grid[i][j - 1];
        const down = (grid[i + 1] || [])[j];
        const up = (grid[i - 1] || [])[j];
        if (right === '1') {
          unionTree.union(i * n + j, i * n + j + 1);
        }
        if (down === '1') {
          unionTree.union(i * n + j, (i + 1) * n + j);
        }
        if (left === '1') {
          unionTree.union(i * n + j, i * n + j - 1);
        }
        if (up === '1') {
          unionTree.union(i * n + j, (i - 1) * n + j);
        }
      }
    }
  }
  return unionTree.count;
};



console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));