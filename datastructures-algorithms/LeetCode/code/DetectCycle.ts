

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function detectCycle1(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let map: Map<ListNode, number> = new Map();
  let index = 0;
  while (head) {
    if (map.get(head) !== undefined) {
      return head;
    } else {
      map.set(head, index++);
    }
    head = head.next;
  }

  return null;
};


function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let slow: ListNode | null = head, fast: ListNode | null = head;

  while (slow && fast) {
    slow = slow.next;
    if (!fast.next) {
      return null;
    }
    fast = fast.next.next;
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }

  return null;
}