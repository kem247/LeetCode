/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    while(head && head.val === val)  head = head.next;
     let prev = null;
    let currentNode = head;
    while(currentNode) {
        const next = currentNode.next;
        if(currentNode.val === val){
            prev.next = next
        } else {
            prev = currentNode;
        }
        currentNode = next;
    }
      
    return head;
    
};