/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let mat = [];
    let res = [];
    
    for(let i = 0; i < n; i++) {
        mat[i] = new Array(n).fill('.');
    }


function nQueen(mat, row) {
    if(row === mat.length) {
        res.push([]);
        for(let i = 0; i < mat.length; i++) {
            res[res.length - 1].push(mat[i].join(''));
        }
        return;
    }
    
    for(let i = 0; i < mat.length; i++){
        if(isSafe(mat, row,i)){
            mat[row][i] = 'Q';
            nQueen(mat,row + 1);
            mat[row][i] = '.'
        }
    }
}

function isSafe(mat,row,col) {
    for(let i = row-1; i >=0; i--) {
        if(mat[i][col] === 'Q') return false;
    }
    for(let i = row - 1, j = col - 1; i >= 0 && j >=0; i--, j--) {
        if(mat[i][j] === 'Q') return false;
    }
    
    for(let i = row -1, j = col+1; i>=0 && j < mat.length; i--, j++){
        if(mat[i][j]==='Q') return false;
    }
    return true;
}

 nQueen(mat, 0);
 return res;
};