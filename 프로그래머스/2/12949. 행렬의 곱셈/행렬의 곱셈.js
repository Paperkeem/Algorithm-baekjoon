function solution(arr1, arr2) {
  var answer = Array.from(Array(arr1.length), () => new Array(arr2[0].length));

  const sum = (a, b) => {
    let sum = 0;

    for(n = 0; n < arr1[0].length; n ++){
      sum += arr1[a][n] * arr2[n][b]
    }

    return sum;
  }
  
  for(i=0; i < arr1.length; i++){
    for(j=0; j < arr2[0].length; j++){
      answer[i][j] = sum(i, j)
    }
  }

  return answer;
}