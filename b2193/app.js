const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = input[0];
let DP = [[0,0],[0,1],[1,0]]

for (let i = 3; i <= N; i++) {
  DP[i] = new Array(2).fill(0);

  DP[i][0] = BigInt(DP[i - 1][0] + DP[i - 1][1]);
  DP[i][1] = BigInt(DP[i - 1][0]);
}

console.log((BigInt(DP[N][0]) + BigInt(DP[N][1])).toString());