function solution(n, t, m, p) {
  let answer = '';
  let cnt = 0;

  while(answer.length < t * m){
    let arr = answer.concat(cnt.toString(n))
    answer = arr
    cnt++;
  }

  let result = '';
  
  for(i = p - 1; i < answer.length; i+=m){
    let temp = result.concat(answer[i])
    result = temp;

    if(result.length === t){
      break;
    }
  }
  return result.toUpperCase()
}