const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];
let cmd = input[1].split(' ').map(x => +x);
let dp = new Array(N + 1).fill(1);
let temp = [];

for (let i = 0; i < N; i++){
  for (let j = 0; j < i; j++){
    if (cmd[i] > cmd[j]) {
      temp.push(dp[j+1] + 1);
    } else {
      temp.push(1);
    }
    dp[i + 1] = Math.max(...temp);
  }
  temp = [];
}

console.log(Math.max(...dp));