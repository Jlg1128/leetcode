/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {

};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function Tree(arr) {
  this.arr = arr;
  this.tree = this.createTree();
}

Tree.prototype.getTree = function(arr = this.arr) {
  let tree = new TreeNode(arr[0]);
  let root = tree;
  let result = [];
  result.push(tree);
  let i = 1;
  while (result.length && i < arr.length) {
    let node = result.shift();
    node.left = new TreeNode(arr[i++]);
    result.push(node.left);
    if (i < arr.length) {
      node.right = new TreeNode(arr[i++]);
      result.push(node.right);
    }
  }
  return tree;
}
Tree.prototype.createTree = function(arr, i = 0) {
  if (!arr) arr = this.arr;
  if (i >= arr.length) {
    return null;
  }
  return new TreeNode(arr[i], this.createTree(arr, 2 * i + 1), this.createTree(arr,2 * i + 2));
}

Tree.prototype.getHeight = function(tree) {
  if (!tree) {
    return 0;
  }
  let l = this.getHeight(tree.left);
  let r = this.getHeight(tree.right);
  return l > r ? l + 1 : r + 1;
}

Tree.prototype.dfs = function(tree = this.tree) {
  if (!tree) {
    return;
  }
  console.log(tree.val);
  if (tree.left) this.dfs(tree.left);
  if (tree.right) this.dfs(tree.right);
}

Tree.prototype.bfs = function(tree = this.tree) {
  let queue = [];
  queue.push(tree);
  while (queue.length) {
    let node = queue.shift();
    console.log(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

let tree = new Tree(['A', 'B', 'C', 'D', 'E', 'F', 'G']);

// let height = tree.getHeight(tree.tree);
console.log(tree.bfs(tree.tree));

module.exports = Tree;

