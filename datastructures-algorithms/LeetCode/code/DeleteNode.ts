class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head;
  }
  let curr = head, prev;
  while (curr != null && curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }
  if (curr) {
    prev.next = curr.next;
  }
  return head;
};

