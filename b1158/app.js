const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');
let num = +input[0];
let cnt = +input[1];
let stack = Array(num).fill().map((arr,i)=>{return i+1});
let ans =[];
while(stack.length!=0){
  for(let i =0; i<cnt-1; i++){
    stack.push(stack.shift(stack[0]));
  }
  ans.push(stack.shift());
}
console.log('<'+ans.join(', ')+'>');