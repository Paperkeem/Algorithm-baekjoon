const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n=input[0];
let numbers=input[1].split(' ').map((x)=>+x);

solution(n, numbers)

function solution(n, numbers){
  let stack = [];
  let ans = [];

  for(let i=n-1; i>=0; i--){
    while(stack.length != 0 && stack[stack.length-1] <= numbers[i]){
      stack.pop();
    }
    if(stack.length==0){
      ans[i]=-1;
    }else{ 
      ans[i]=stack[stack.length-1];
    }
    stack.push(numbers[i])
  }
  console.log(ans.join(' '));
}