/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  let cur;
  if (l1.val > l2.val) {
    cur = l2;
    l2 = l2.next;
  } else {
    cur = l1;
    l1 = l1.next;
  }

  let dum = cur;
    
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      cur.next = l2;
      l2 = l2.next;
    } else {
      cur.next = l1;
      l1 = l1.next;
    }
    cur = cur.next;
  };

  cur.next = l1 ? l1 : l2;

  return dum;
};