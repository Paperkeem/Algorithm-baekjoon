const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


let [n, ...nums] = input;
let numbers = nums.map((item)=>+item);

const a = solution(n, numbers);
console.log(a);

function solution(n, numbers){

  const stack = [];
  let answer = '';
  let count = 1 ; 

  for(let i=0; i<n; i++){
    const number = numbers.shift();
    
    while(count <= number){
      stack.push(count++);
      // console.log(stack);
      answer += '+';
    }
    
    const popedItem = stack.pop();
    if(popedItem!=number){
      return 'NO';
    }
    answer += '-';
  }

  return answer.split('').join('\n');
}
