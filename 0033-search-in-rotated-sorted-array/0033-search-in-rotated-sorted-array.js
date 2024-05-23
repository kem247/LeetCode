/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [l,r] = [0, nums.length - 1];
    const [leftNum, rightNum] = [nums[l], nums[r]];

    
    while(l <= r) {
        const mid = (l + r) >> 1;
        if(nums[mid] === target) return mid;
        if(leftNum <= nums[mid]) {
             const isInRange = leftNum <= target;
             const isLess = target < nums[mid]; 
            
            const isTargetGreater = !(isInRange && isLess);
            if (isTargetGreater) l = mid + 1;
            
            const isTargetLess = isInRange && isLess;
            if (isTargetLess) r = mid - 1;
        }
            if( nums[mid] < leftNum) {
                const isGreater = nums[mid] < target;
                const isInRange = target <= rightNum;
                
                const isTargetGreater = isGreater && isInRange
                if (isTargetGreater) l = mid + 1;
                
                const isTargetLess = !(isGreater && isInRange);
                if (isTargetLess) r = mid - 1;
            }
      
    }
      return -1;
};