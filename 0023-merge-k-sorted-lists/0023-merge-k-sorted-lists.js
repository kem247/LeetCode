/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let prev = null;
    
    for(let i = 0; i < lists.length; i++) {
        prev = mergeTwoLists(prev, lists[i]);
    }
    return prev;
};

var mergeTwoLists = function(list1, list2) {
    let sentinel = tail = new ListNode(0);
    
    while(list1 && list2) {
        const addL1 = list1.val <= list2.val
        if(addL1){
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 || list2;
    
    return sentinel.next;
}