/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //pre-fix 
    //post-fix
   
    const ans = [];
    let prefix = 1;
    let postfix = 1;
    
    for(let i = 0; i < nums.length; i++) {
         ans[i] = prefix;
         prefix *= nums[i];
    }
    for(let i = nums.length-2; i >= 0; i--) {
       postfix *= nums[i + 1];
        ans[i] *= postfix;
    }
    return ans;
};