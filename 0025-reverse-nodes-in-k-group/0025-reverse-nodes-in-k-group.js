/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const sentinel = tail = new ListNode(0, head);
    
    while(true) {
        let [start, last] = moveNode(tail,k);
        if(!last) break;
        
        reverse([start, tail.next, start])
        
        const next = tail.next;
        tail.next = last;
        tail = next; 
    }
    return sentinel.next;
};

const moveNode = (curr, k) => {
    const canMove = () => k && curr;
    while(canMove()) {
        curr = curr.next;
        k--;
    }
    return [(curr?.next || null), curr]
}

const reverse = ([prev, curr, start]) => {
    const isSame = () => curr === start;
    while(!isSame()) {
        const next = curr.next;
        curr.next = prev;
        
        prev = curr;
        curr = next;
    }
}