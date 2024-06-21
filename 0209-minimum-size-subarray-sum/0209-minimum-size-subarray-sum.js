/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let fast = 0;
    let slow = 0;
    let sum = 0;
    
    let minimumSize = nums.length + 1
    
    while(fast < nums.length && minimumSize  > 1) {
        sum += nums[fast];
        
        if( sum >= target ) {
            while(sum - nums[slow] >= target) {
                sum -= nums[slow++];
            }
            minimumSize = Math.min(minimumSize, fast - slow + 1) 
            sum -= nums[slow++]
        }
        fast++;
    }
    return minimumSize < nums.length + 1 ? minimumSize : 0
};