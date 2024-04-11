/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1. loop through the nums loop
    // 2. loop again and compare the nums to the previous 1
    // 3. if i + j =  target return the position in the array 
    for(let i = 0 ; i < nums.length; i++) {
       for(let j = i + 1; j < nums.length; j++) {
          if( nums[i]  + nums[j] == target ) {
              return [i,j]; 
          }
        }
    }
    
};