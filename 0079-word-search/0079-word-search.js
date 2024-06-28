/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

const checkNeighbors = (board, word, row, col) => {
    //check exit conditions;
    if(!word.length) return true;
    if(isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;
    //save
    const curChar = board[row][col]
    const newWord = word.substr(1);
    
    board[row][col] = 0; //disable the current character
    
    const results = checkNeighbors(board, newWord, row + 1, col) ||
                    checkNeighbors(board, newWord, row - 1, col) ||
                    checkNeighbors(board, newWord, row, col + 1) ||
                    checkNeighbors(board, newWord, row, col - 1);
    
    //Enable current character
    board[row][col] = curChar;
    
    return results;
                    
}
var exist = function(board, word) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(checkNeighbors(board, word, i, j)) return true;
        }
    }
    return false;
};