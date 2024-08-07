/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length
    const cols = matrix[0].length 
    let top = 0
    let bot =  rows - 1
    while(top <= bot){
        let row = (top + bot) // 2
        if( target > matrix[row][-1]) {
            top = row + 1
        } else if( target < matrix[row][0]) {
            bot = row - 1
        } else {
            break;
        }
    }
    if (!(top <= bot)) {
        return false
    }
    let row = (top + bot) // 2
    let l = 0
    let r = cols - 1
    while( l <= r){
        let m = (l + r) // 2
        if( target > matrix[row][m]){
            l = m + 1
        } else if(target < matrix[row][m]){
            r = m - 1
        } else {
            return true
        }
    }
    
    return false
};