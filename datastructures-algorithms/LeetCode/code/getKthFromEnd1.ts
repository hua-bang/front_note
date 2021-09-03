class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let p0 = head, p1 = head;
  let count = 0;
  while (p0) {
    count++;
    p0 = p0.next;
  }

  if (k > count) {
    return null;
  }

  while (count !== k) {
    count--;
    p1 = p1.next;
  }
  return p1;
};