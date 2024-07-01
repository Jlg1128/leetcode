class UnionTree {
  count = 0;

  arr = [];

  size = [];

  constructor(n) {
    this.arr = Array.from({length: n}, (item, index) => index);
    this.size = Array.from({length: n}).fill(1);
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
      this.arr[rootP] = this.arr[rootQ];
      this.size[rootP] += this.size[rootQ];
    }
    this.count --;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}

const tree = new UnionTree(5);
tree.union(0, 1);
tree.union(1, 2);
const s = tree.find(1);