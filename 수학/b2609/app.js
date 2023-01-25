const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input=input[0]
input=input.split(' ').map((item)=>+item);


solution(input[0],input[1]);

function solution(a, b){
  const N = [a,b];
  while(N[0] % N[1] !== 0){
    let n = N[0]%N[1];
    if(n !== 0){
      N[0]=N[1];
      N[1]=n;
    }
  }
  
  
  let GCM = N[1]; 
  let LCM = (a * b) / GCM;

  console.log(GCM);
  console.log(LCM);

}