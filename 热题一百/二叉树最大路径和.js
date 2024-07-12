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
 * @return {number}
 */
// 注意点
// 1.Number.MIN_SAFE_INTEGER
// 2.可以是把当前节点当作根节点（需要加上左右节点），也可以把当前节点作为路径的一个点（只能加上左节点或者右节点）
var maxPathSum = function(root) {
  let max2 = Number.MIN_SAFE_INTEGER;
  var maxGain = function(node) {
    if (!node) return 0;
    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);
  
    max2 = Math.max(leftGain + rightGain + node.val, max2);
    return node.val + Math.max(leftGain, rightGain);
  };
  maxGain(root);
  return max2;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

console.log(maxPathSum(new TreeNode(-3)));