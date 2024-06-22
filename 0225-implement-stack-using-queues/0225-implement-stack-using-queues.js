var MyStack = function() {
    this.queue = {};
    this.queue.lifo = null;
    this.queue.size = 0;
    this.queue.push = function(x) {
        if(!this.size) {
            this.lifo = {val: x , next: null}
        } else  {
            let curr = this.lifo;
            while(curr.next) {
                curr = curr.next;
            };
            curr.next = {val: x, next: null}
        }
        this.size += 1;
    };
    this.queue.pick = function(){
        let curr = this.lifo;
        this.lifo = this.lifo.next;
        this.size -= 1;
        return curr.val;
    };
    this.queue.isEmpty = function(){
        return this.size === 0;
    };

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   for(let i = 1; i < this.queue.size; i++) {
       this.queue.push(this.queue.pick());
   }
    return this.queue.pick();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
   for(let i = 1; i < this.queue.size; i++)  {
       this.queue.push(this.queue.pick());
   }
     let top = this.queue.pick();
    this.queue.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */