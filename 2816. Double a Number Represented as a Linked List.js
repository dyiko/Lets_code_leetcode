//2816. Double a Number Represented as a Linked List
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
let doubleIt = function(head) {
    let twice = function(node) {
        if (!node) {
            return 0;
        }
        let doubledValue = node.val * 2 + twice(node.next);
        node.val = doubledValue % 10;
        return Math.floor(doubledValue / 10);
    };

    let carry = twice(head);
    if (carry > 0) {
        head = new ListNode(carry, head);
    }
    return head;
};