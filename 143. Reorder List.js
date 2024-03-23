/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//143. Reorder List
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return; 
    const list = []; 
    let curr = head;
    while (curr !== null) { 
        list.push(curr.val);
        curr = curr.next;
    }
    curr = head;
    for (let i = 0, j = list.length - 1; i < list.length && j >= 0; i++, j--) {
        if (i <= j) { 
            curr.val = list[i];
            curr = curr.next;
        }
        if (curr === null) {
            return;
        }
        else if (i !== j) { 
            curr.val = list[j];
            curr = curr.next;
        }
    }
};