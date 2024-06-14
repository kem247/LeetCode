/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0]
    let currValue = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currValue += nums[i];
        sum = Math.max(sum, currValue)
        if(currValue < 0) currValue = 0;
        
    }
    return sum;
};