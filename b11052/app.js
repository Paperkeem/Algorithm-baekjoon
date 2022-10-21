const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];
let arr = input[1].split(' ').map(x=>+x);
let DP = [0, ...arr];

for(let i=2; i<=N; i++){
  for(let j=1; j<i; j++){
    DP[i] = Math.max(DP[i], DP[i-j]+DP[j]);
  }
}

console.log(DP[N]);




