const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];
let cmd = input[1].split(' ').map(x => +x);
let dp = new Array(N).fill(1);
let arr = [];
for (let i = 0; i < N; i++){
  var max = 0;
  var maxIndex = -1;
  for (let j = 0; j < i; j++){
    if (cmd[i] > cmd[j] && dp[j] > max) {
      max = dp[j];
      maxIndex = j;
    }
  }
  dp[i] = max + 1;
  arr[i]= maxIndex !== -1 ? arr[maxIndex].concat(cmd[i]) : [cmd[i]]
}
var maxLength = Math.max(...dp);
console.log(maxLength);
console.log(arr[dp.indexOf(maxLength)].join(' '));