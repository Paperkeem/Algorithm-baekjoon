const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num=input[0];
let cmd=input[1].split(' ').map((x)=>+x);
let copy = [...cmd];

let stack = [];
let temp = [];
let ans = [];

for(let i=0; i<num; i++){
  let a = copy[i];
  stack.push(cmd.shift());

  for(let j=0; j<num-i; j++){
    if(a<cmd[j]){
      temp.push(cmd[j]);
    }
  }

  if(temp.length==0){
    ans.push(-1);
    temp=[];
  }else{
    ans.push(temp[0]);
    temp=[];
  }

}

console.log(ans.join(' '));

