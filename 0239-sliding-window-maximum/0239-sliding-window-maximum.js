/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class LazyDeletionDeque {
    constructor() {
        this.deque = [];
        this.leftIdx = 0;
    }
    
    isEmpty = () => {
        return this.deque.length === this.leftIdx;
    };
    push = (num) => {
        this.deque.push(num);
    };
    popFront = () => {
      this.leftIdx++;  
    };
    popBack = () => {
        !this.isEmpty() && this.deque.pop();
    };
    front = () => {
       return this.deque[this.leftIdx] 
    };
    back = () => {
        return this.deque[this.deque.length - 1]
    };
}

var maxSlidingWindow = function(nums, k) {
    const deque = new LazyDeletionDeque();
    const answer = [];
    let leftWindow = 0; 
    
    for(let rightWindow = 0; rightWindow < nums.length; rightWindow++) {
        const rightNum = nums[rightWindow];
        while (!deque.isEmpty() && rightNum > deque.back()) {
            deque.popBack()
        }
        deque.push(rightNum);
        
        if(rightWindow >= k - 1) {
            const dequeFront = deque.front();
            const leftNum = nums[leftWindow];
            if(leftNum === dequeFront) {
                deque.popFront();     
            }
            answer.push(dequeFront);
            leftWindow++; 
        }
    }
    return answer;
};