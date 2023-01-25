const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];
let dp = new Array(N+1).fill(0);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= N; i++){
  dp[i] = i;
  for (let j = 1; j * j <= i; j++){
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}
console.log(dp[N]);
