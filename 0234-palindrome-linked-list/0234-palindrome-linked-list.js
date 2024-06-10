/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head; 
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let reversed = null;
    let next = null;
    let curr = slow;
    
    while(curr) {
        next = curr.next;
        curr.next = reversed;
        reversed = curr;
        curr = next;
    }
    
    while(reversed) {
        if(reversed.val !== head.val) return false;
        reversed = reversed.next;
        head = head.next;
    }
    return true;
};