function solution(number, k) {

  number = number.split('');
  let numberIdx = 0;
  let stack = [];

  while(numberIdx !== number.length && k > 0){
    stack.push(number[numberIdx++]);
    while(stack.at(-1) < number[numberIdx] && k > 0){
        stack.pop();
        k -= 1;
    }
  }
  
  if(k !== 0) stack = stack.slice(0, -k)
  return stack.join('') + number.slice(numberIdx).join('');
}