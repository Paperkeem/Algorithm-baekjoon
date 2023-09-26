function solution(n) {
    var answer = [0, 1];
    var temp = 1;
    var na = 1234567;
  
if(n > 100000) return;
  while(temp !== n){
      answer.push(answer[temp-1] % na + answer[temp] % na)
      temp++;
  }
  return answer[n] % na;
}