const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
let dp = [];
let rgb = [];
let ans = 2147000000;

for (let k = 0; k < N; k++) {
  rgb.push(input[k].split(' ').map(x => +x));
}

for (let i = 0; i < 3; i++){
  dp[0] = [1001, 1001, 1001];
  dp[0][i] = rgb[0][i];

  for (let j = 1; j < N; j++){
    dp[j] = new Array(3).fill(0);
    dp[j][0] = rgb[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = rgb[j][1] + Math.min(dp[j - 1][2], dp[j - 1][0]);
    dp[j][2] = rgb[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
  }

  for (let j = 0; j < 3; j++){
      if (i != j) {
        ans = Math.min(ans, dp[N-1][j])
      }
  }
};

console.log(ans);