/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  return merge(lists, 0, lists.length - 1);
};

function merge(lists, l, r) {
  if (l === r) {
    return lists[l]
  }
  if (l > r) return null;
  const mid = (l + r) >> 1;
  return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
}

var mergeTwoLists = function(list1, list2) {
  let head = new ListNode(null);
  let temp = head;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      temp.next = list2;
      list2 = list2.next;
    } else {
      temp.next = list1;
      list1 = list1.next;
    }
    temp = temp.next;
  }
  temp.next = list1 ? list1 : list2;
  return head.next;
};