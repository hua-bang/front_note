/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  
  let p1, p0;
  p1 = head, p0 = head.next;

  while (p0) {
    if (p0.val === val) {
      if (!p0.next) {
        p0 = null
      } else {
        p0 = p0.next;
      }
      break;
    }
    p0++;
  }
  p1.next = p0;

  return head;
};