//206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let preveous = null;
    let current = head;
    while (current !== null) {
        let nextTemp = current.next;
        current.next = preveous;
        preveous = current;
        current = nextTemp;
    }
    return preveous;
};