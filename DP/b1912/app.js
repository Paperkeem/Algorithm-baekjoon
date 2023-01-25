const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let numbers = input[1].split(' ').map(x => +x);
let dp = new Array(N).fill(null);

for (let i = 0; i < N; i++){
  dp[i] = numbers[i];
  if (numbers[i] < dp[i - 1] + numbers[i]) {
    dp[i] = dp[i - 1] + numbers[i];
  }
}
console.log(Math.max(...dp));