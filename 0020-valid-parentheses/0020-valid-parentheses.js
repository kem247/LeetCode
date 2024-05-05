/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s, stack = []) {
    VALIDS = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    for( const char of s){
        const isBracket = (char in VALIDS);
        if(!isBracket) {stack.push(char); continue;}
        
        const isEqual = (stack[stack.length -1] === VALIDS[char])
        if(isEqual) { stack.pop(); continue }
        
        return false;
    }
     
       return stack.length === 0;
};