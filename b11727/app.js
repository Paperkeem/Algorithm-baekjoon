const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let num = +input;

let DP = new Array(num+1).fill(0);
DP[1]=1;
DP[2]=3;

for(let i=3; i<=num; i++){
  DP[i] = (DP[i-1] + ( DP[i-2] * 2 )) % 10007 ;
} 

console.log(DP[num]);