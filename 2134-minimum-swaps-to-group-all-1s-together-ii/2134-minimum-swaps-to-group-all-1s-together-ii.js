/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
   let ones = 0;
   let fast = 0;
   let slow = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) ones++;
    }
   if(ones === 0) return 0;
    
    let currOnes = 0;
    let min = ones;
    
    while(fast < nums.length + ones) {
        if(nums[fast % nums.length] === 1) currOnes++;
        if(fast >= ones) {
            if(nums[slow++] === 1) currOnes--;
            min = Math.min(min, ones - currOnes);
        }
        fast++;
    }
    return min;
};