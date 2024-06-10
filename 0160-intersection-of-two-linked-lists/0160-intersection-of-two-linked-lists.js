/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let listA = headA, listB = headB
    let intersectVal = 0;
    while(listA !== listB) {
        listA = listA.next;
        listB = listB.next;
        if(listA == listB) {
            return listA;
            
        }
        if(listA === null)  listA = headB;
        if(listB === null)  listB = headA;
    }
       return listA;
};