/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.trim().split(' ').filter(Boolean);

    let result = "";
    let right = sArr.length - 1;
    
 for(let i = sArr.length - 1; i >= 0 ; i--) {
     result = i !== 0 ?`${result}${sArr[i]} `
     : `${result}${sArr[i]}`
 }
    return result;
};