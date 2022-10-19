const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let lstack=input[0].split('');
let rstack=[];
let len=parseInt(input[1]);

for(let i=2; i<2+len; i++){
  let [cmd, value] = input[i].split(' ');
  
  if(cmd=='L' && lstack.length) rstack.push(lstack.pop());
  else if(cmd=='D' && rstack.length) lstack.push(rstack.pop());
  else if(cmd=='B') lstack.pop();
  else if(cmd=='P') lstack.push(value);
}

let ans = lstack.join('');
ans+=rstack.reverse().join('');
console.log(ans);