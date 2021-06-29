// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/submissions/

// 时间复杂度 O(n)
// 空间复杂度 O(n)

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    let current = head;

    while(current!=null) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;

    while(current != null) {
        map.get(current).next = current.next ? map.get(current.next) : null;
        map.get(current).random = current.random ? map.get(current.random) : null;
        current = current.next;
    }

    return map.get(head);
};
