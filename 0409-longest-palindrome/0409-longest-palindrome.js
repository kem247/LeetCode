/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let frequencyMap = {};
    let arr = s.split('');
    let palindromeLength = 0;
    
    for(let c of s) {
        if(!frequencyMap[c]){
            frequencyMap[c] = 1;
        } else {
            frequencyMap[c]++;
        }
    }
    
    for(let key in frequencyMap) {
        while(frequencyMap[key] > 1) {
            palindromeLength += 2;
            frequencyMap[key] -=2
        }
    }
    
    if( s.length > palindromeLength){
        return palindromeLength +=1;
    }
        return palindromeLength;
};