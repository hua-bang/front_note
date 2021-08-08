(() => {
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
    }
  }

  function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
      return head;
    }

    let p: ListNode = null, temp: ListNode;
    while (head) {
      temp = head;
      head = head.next;
      temp.next = p;
      p = temp;
    }
    return p;
  };
})();