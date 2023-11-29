function solution(arr) {
  var answer = [];
  let total = [0, 0];

  function compression (xStart, xEnd, yStart, yEnd) {

    let cnt = [0, 0]
    let mx = (xEnd - xStart) / 2;
    let my = (yEnd - yStart) / 2;
    
    for(let i = xStart; i < xEnd; i++){
      for(let j = yStart; j < yEnd; j++){
        if (arr[i][j] === 0) cnt[0]++;
        if (arr[i][j] === 1) cnt[1]++;
      }
    }
 
    if(cnt[1] === 0 && cnt[0] > 0) return total[0]++;
    else if(cnt[0] === 0 && cnt[1] > 0) return total[1]++;
    else {
      compression(xStart, xEnd - mx, yStart + my, yEnd)
      compression(xStart + mx, xEnd, yStart + my, yEnd)
      compression(xStart, xEnd - mx, yStart, yEnd - my)
      compression(xStart + mx, xEnd, yStart, yEnd - my)
    }
  }

 compression(0, arr[0].length, 0, arr.length);

 return total
}