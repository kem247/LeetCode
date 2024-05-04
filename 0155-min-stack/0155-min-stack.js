
class MinStack  {
     constructor () {
     this.head = null;        
}
    push(val) {
        this.head = (!this.head)
        ? new Node(val, val, null)
        : new Node(val, Math.min(val, this.head.min), this.head)
        
    }

    pop() {
        this.head = this.head.next;
    }
    top() {
        return this.head.val;
    }
    getMin(){
        return this.head.min;
    }
    
};


class Node {
    constructor(val, min, next) {
        this.val = val;
        this.min = min;
        this.next = next;
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */