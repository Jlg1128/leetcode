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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    const temp = queue.map(item => item.val);
    const nodes = queue.reduce((all, curNode) => {
      if (curNode.left) all.push(curNode.left);
      if (curNode.right) all.push(curNode.right);
      return all;
    }, []);
    queue.length = 0;
    queue.push(...nodes);
    res.push(temp);
  }
  return res;
};