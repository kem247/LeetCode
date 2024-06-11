/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        let key = nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(key, i)
    }
      return null;
};