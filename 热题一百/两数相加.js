/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let interactionIndex = -1;
  let top = 0;
  let bottom = 0;
  let topArr = [];
  let bottomArr = [];
  while (l1 || l2) {
    if (l1) {
      topArr.push(l1.val);
      l1 = l1.next;
      top++
    }
    if (l2) {
      bottomArr.push(l2.val);
      l2 = l2.next;
      bottom++;
    }
  }
  const ans = [];
  let temp = 0;
  const end = Math.max(topArr.length, bottomArr.length);
  for (let i = 0; i < end; i++) {
    const val = (topArr[i] || 0) + (bottomArr[i] || 0) + temp;
    ans.push(val % 10);
    temp = Math.floor(val / 10);
  }
  let head = node = new ListNode(ans[0]);
  for (let i = 1; i < ans.length; i++) {
    node.next = new ListNode(ans[i]);
    node = node.next;
  }
  return head;
};