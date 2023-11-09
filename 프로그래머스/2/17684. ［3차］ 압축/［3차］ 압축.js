function solution(msg) {
  const answer = [];
  const arr = [0];

  for(let i = 1; i <= 26; i++){
    arr.push(String.fromCharCode(i + 64));
  }

  let idx = 0;
  let word = msg[idx];
  
  while(true){
    let next = msg[++idx];

    if(next === undefined){
      answer.push(arr.indexOf(word));
      return answer;
    }

    if(arr.includes(word) && !arr.includes(word + next)){
      answer.push(arr.indexOf(word));
      arr.push(word + next);

      word = next;
    } else {
      word += next;
    }
  }
}