function solution(n) {
  var answer = '';
  let number = [1, 2, 4];

  while(n > 0){
    let index = (n - 1) % 3;
    n = Math.floor((n - 1) / 3)
    answer = number[index] + answer;
  }
  
  return answer;
}
