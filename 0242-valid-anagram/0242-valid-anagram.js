/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sortedS = s.split('').sort().join()
    let sortedT = t.split('').sort().join()
    
    if(sortedS === sortedT) {
        
        return true
    } else {
        return false;
    } 
        
        
    
};