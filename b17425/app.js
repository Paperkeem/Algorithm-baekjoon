const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input.map(item=>Number(item))
solution(input);

function solution(arr){
  let f=Array(1000001).fill(1);
  let d=Array(1000001);
  f[0]=0;
  d[0]=0;

  for(i=2; i<=1000000; i++){
    for(j=1; j<=1000000; j++){
      f[i*j]+=i;
    }
  }
  for(i=1; i<1000000; i++){
    d[i] = d[i-1] + f[i];
  }

  arr.shift();
  let ans=[];
  arr.forEach(x => {
    ans.push(d[x])});
  console.log(ans);
}