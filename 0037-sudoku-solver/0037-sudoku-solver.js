/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const solve=(board)=>{
      for(let row = 0; row < board.length; row++){
          for(let col = 0; col < board[0].length; col++) {
              if(board[row][col] === '.'){
                  
                  for(let num = 1; num <= 9; num++){
                  if(isValid(board, row, col, num.toString())){
                       board[row][col] = num.toString();
                      
                      if(solve(board) === true){
                          return true;
                      }
                      else {
                          board[row][col]=".";
                      }
                  }
              }
              return false;
          }
      }
  }  
   return true;
  }  
   const isValid=(board, row, col, char )=>{
       for(let index = 0; index < 9; index++ ) {
           if(board[row][index] === char) {
               return false;
           }
           
           if(board[index][col] === char){
               return false;
           }
           
           if(board[3*Math.floor(row/3)+Math.floor(index/3)][3*Math.floor(col/3)+Math.floor(index % 3)] === char){
               return false;
           }
           
       }
          return true;
   }
       solve(board);
};