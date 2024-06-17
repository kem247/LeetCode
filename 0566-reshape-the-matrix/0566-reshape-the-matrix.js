/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const result = [];
    let arr = [];
    if(r * c !== mat.length * mat[0].length) return mat;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
           arr.push(mat[i][j]) 
        }
    }
    while(arr.length) {
        result.push(arr.splice(0,c))
    }
    return result;
};