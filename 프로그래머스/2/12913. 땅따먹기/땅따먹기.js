function solution(land) {
  var answer = 0;

  for(let i=1; i<land.length; i++){
    for(let j=0; j<4; j++){
      let max =0;
      for(let k=0; k<4; k++){
        if(j !== k){
          max = Math.max(land[i-1][k], max)
        }
        
      }
      land[i][j] = max + land[i][j];
    }
  }

  return Math.max(...land[land.length - 1]);
}