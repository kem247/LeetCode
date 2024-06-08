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
      let newList = null;
      let currentNode = head;
    
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = nextNode;
    }
    return newList;
};