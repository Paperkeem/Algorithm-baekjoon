const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [N, K] = input[0].split(' ').map(x => +x);
let mod = 1000000000;
let dp = [];
dp[0] = new Array(K + 1).fill(0);
dp[1] = new Array(K + 1).fill(1);
dp[1][0]=0

for (let i = 2; i <= N; i++){
  dp[i] = new Array(K+1).fill(0);
  for (let j = 1; j <= K; j++){
    for (let k = 1; k <= j; k++){
      dp[i][j] += dp[i - 1][k] % mod
    }
  }
}
console.log(dp[N].reduce((a, b) => a + b, 0) % mod);
