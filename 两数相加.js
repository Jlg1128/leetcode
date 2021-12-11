const _ = require('./util');

let l1 = _.getLinkedList([9,9,9,9,9,9,9]);
let l2 = _.getLinkedList([9,9,9,9]);
 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
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
    let arr1 = [], arr2 = [];
    while (l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
       arr2.push(l2.val);
       l2 = l2.next;
   }
   let i = 0, j = 0;
   let jinwei = 0;
   let res = new ListNode(null, null);
   let head = res;
   while (i < arr1.length && j < arr2.length) {
       let sum = arr1[i] + arr2[j] + jinwei;
       jinwei = 0;
       jinwei = sum >= 10 ? 1 : 0;
       res.next = new ListNode(jinwei ? sum % 10 : sum);
       res = res.next;
       i++;
       j++;
   }
   while (i < arr1.length) {
       let sum = arr1[i] + jinwei;
       jinwei = sum >= 10 ? 1 : 0;
       res.next = new ListNode(jinwei ? sum % 10 : sum);
       res = res.next;
       i++;
   }
   while (j < arr2.length) {
       let sum = arr2[j] + jinwei;
       jinwei = sum >= 10 ? 1 : 0;
       res.next = new ListNode(jinwei ? sum % 10 : sum);
       res = res.next;
       j++;
   }
   if (jinwei) {
        res.next = new ListNode(jinwei);
   }
   return head.next;
};

console.log(addTwoNumbers(l1, l2)); 