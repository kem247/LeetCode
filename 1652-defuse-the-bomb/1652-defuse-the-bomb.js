/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
        let decoded = Array(code.length).fill(0);
        if( k == 0 ) return decoded;
    
        let direction = k < 0 ? 1 : -1;
    
        for(let i = 0; i < code.length; i++) {
            for(let j = k; j != 0; j+= direction) {
                let idx = (i +j) % code.length
                idx < 0 ? idx += code.length : idx
                decoded[i] += code[idx]
            }
        }
    return decoded;
};