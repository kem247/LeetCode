/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merge = new ListNode();
    let head = merge;
    
    
    while(list1 && list2) {
        if(list1.val < list2.val){
            merge.next = list1;
            list1 = list1.next
        } else {
            merge.next = list2;
            list2 = list2.next;
        }
        merge = merge.next;
    }
    merge.next = (list1 || list2)
   return head.next;
};