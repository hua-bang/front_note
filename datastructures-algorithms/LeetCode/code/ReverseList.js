// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let result = null;
    let temp = head;
    while(head != null) {
        temp = head;
        head = head.next;
        temp.next = result;
        result = temp;
    }
    return result;
};