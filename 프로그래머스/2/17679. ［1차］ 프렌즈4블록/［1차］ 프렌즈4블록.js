function solution(m, n, board) {
  board = board.map((v) => v.split(""));

  while(true){
    let arr = []
    
    for(let i = 0; i < m - 1; i++){
      for(let j = 0; j < n - 1; j++){
        if(board[i][j] && 
          board[i][j] === board[i+1][j] && 
          board[i][j] === board[i][j+1] && 
          board[i][j] === board[i+1][j+1]){
            arr.push([i, j])
          } 
        }
      }

      if(!arr.length) return board.flat().filter((v) => !v).length;

      arr.forEach(([i, j]) => {
        board[i][j] = 0;
        board[i+1][j] = 0;
        board[i][j+1] = 0;
        board[i+1][j+1] = 0;
      })

      for(let y = m - 1; y >= 0; y--){
        for(let x = 0; x < n; x++){
          for(let k = y - 1; k >= 0; k--){
              if(!board[y][x]){
              board[y][x] = board[k][x];
              board[k][x] = 0;
            }
            }
        }
      } 
  }
}