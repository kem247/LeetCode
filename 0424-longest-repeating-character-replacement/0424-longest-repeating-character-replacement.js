/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map();
    let res = 0;
    
    let l = 0;
    
    for(let r = 0; r < s.length; r++) {
        let len = r - l + 1
        count.set(s[r], 1 + (count.get(s[r]) || 0))
    
        if(( len - Math.max(...count.values())) > k){
            count.set(s[l], count.get(s[l]) - 1)
            l++
        }
        len =  r - l + 1
        res = Math.max(res, len)
    }
    return res;
};