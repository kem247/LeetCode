/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
     
     let prev = 1;
     let res = [1];
    for(let i = 1; i <= rowIndex; i++){
        let next_val = prev * (rowIndex - i + 1) / i;
        res.push(next_val);
        prev = next_val;
    }
    return res;
};