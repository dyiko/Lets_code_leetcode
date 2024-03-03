//19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let sec = dummy;
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    while (first !== null) {
        first = first.next;
        sec = sec.next;
    }
    sec.next = sec.next.next;

    return dummy.next;
};