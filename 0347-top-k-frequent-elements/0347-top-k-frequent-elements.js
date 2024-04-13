/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const mp = new Map();
    const arr = new Array(nums.length + 1).fill(0);
    const ans = [];
    
    nums.forEach(el => {
        const val  = mp.get(el) || 0;
        mp.set(el, val + 1);
    });
    
   for(let [key,val] of mp ) {
       // arr [0,0,0,0] //
       const prev = arr[val] || [];
       prev.push(key);
       arr[val] = prev;     
   }
    console.log('hey', arr);
arr.reverse();
for(let el of arr) {
    if(k<1) break; 
    if (el) {
        for (let el2 of el) {
            ans.push(el2);
            k--;
       }
     }
   }
return ans;
};
//bucket sort
//O(n)