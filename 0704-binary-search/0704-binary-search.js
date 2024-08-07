/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l =  0
    let r = nums.length-1

    while(l <= r) {
        let midpoint = (l + r)// 2
        if(nums[midpoint] > target ) {
            r = midpoint - 1
        } else if(nums[midpoint] < target) {
            l = midpoint + 1
        } else {
            return midpoint
        }
    }
    return -1
      
};