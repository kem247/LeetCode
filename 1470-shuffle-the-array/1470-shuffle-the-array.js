/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
   let count = 2*n
   let newArr = [];
   let i = 0;
    
   while(count) {
       newArr.push(nums[i++]);
       newArr.push(nums[n++]);
       count = count-2;
       
   }
    return(newArr)
    
};