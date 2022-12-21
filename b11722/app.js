const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input = input[0].split(' ').map(x => +x);
let dp = [];

for (let i = 0; i < N; i++){
  var max = 0;

  for (let j = 0; j < i; j++){
    if (input[i] < input[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}
console.log(dp);
console.log(Math.max(...dp));