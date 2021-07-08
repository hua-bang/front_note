// https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/588dhc/
// 时间复杂度 O(n)
// 空间复杂度 O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let p0 = head, p1 = head;
  let count = 0;

  while (p1) {
    count++;
    p1 = p1.next;
  }

  while (count !== k) {
    count--;
    p0 = p0.next;
  }

  return p0;
};