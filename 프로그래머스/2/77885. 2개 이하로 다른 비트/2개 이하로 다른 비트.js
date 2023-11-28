function solution(numbers) {
  var answer = [];

  for(let i = 0; i < numbers.length; i++){
    let current = numbers[i];
    
    if(current % 2 === 0){
      answer.push(current + 1)
    } else {
      current = '0' + current.toString(2);
      let len = current.length;
      for(let j = len - 1; j >= 0; j--){
        if(+current[j] === 0){
          answer.push(parseInt(current.slice(0, j) + '10' + current.slice(j + 2), 2))
          break;
        }
      }
    }
  }

  return answer;
}