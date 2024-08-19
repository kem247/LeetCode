/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        const isPreviousDuplicate = nums[i - 1] === nums[i]
        if(isPreviousDuplicate) return nums[i]
    }
    return -1
};