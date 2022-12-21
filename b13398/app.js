const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input = input[0].split(' ').map(x => +x);

let dp = [input[0]];
let dp2 = [input[0]];

for (let i = 1; i < N; i++){
  dp[i] = input[i] > input[i] + dp[i - 1] ? input[i] : input[i] + dp[i - 1];
}

for (let i = 1; i < N; i++){
  dp2[i] = dp[i-1] > input[i] + dp2[i - 1] ? dp[i-1] : input[i] + dp2[i - 1];
}

let dpMax = Math.max(...dp);
let dp2Max = Math.max(...dp2);

console.log(Math.max(dpMax, dp2Max));