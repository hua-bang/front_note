// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/

// 使用栈 时间复杂度 O(n) 空间复杂度 O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    if(head === null) {
        return [];
    }else {
        let stack = [];
        while(head!=null) {
            stack.unshift(head.val);
            head = head.next;
        }
        return stack;
    }
};