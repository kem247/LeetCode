/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = {}
     
    var left = 0;
    var maxLength = 0;
    let charSet = new Set();
    
    for(let right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left])
            left++; 
        }
         charSet.add(s[right])
         maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}; 