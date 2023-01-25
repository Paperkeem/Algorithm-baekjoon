const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = input[0];
let mod = 1000000000;
let DP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

for (let i = 2; i <= N; i++){
  DP[i] = new Array(10).fill(0);

  for (let j = 0; j <= 9; j++){
    DP[i][j] = ((DP[i - 1][j - 1] || 0)) + ((DP[i - 1][j + 1]) || 0) % mod;
  }

  // DP[i][0] = DP[i - 1][1] % mod;
  // DP[i][1] = (DP[i - 1][0] + DP[i - 1][2]) % mod;
  // DP[i][2] = (DP[i - 1][1] + DP[i - 1][3]) % mod;
  // DP[i][3] = (DP[i - 1][2] + DP[i - 1][4]) % mod;
  // DP[i][4] = (DP[i - 1][3] + DP[i - 1][5]) % mod;
  // DP[i][5] = (DP[i - 1][4] + DP[i - 1][6]) % mod;
  // DP[i][6] = (DP[i - 1][5] + DP[i - 1][7]) % mod;
  // DP[i][7] = (DP[i - 1][6] + DP[i - 1][8]) % mod;
  // DP[i][8] = (DP[i - 1][7] + DP[i - 1][9]) % mod;
  // DP[i][9] = DP[i - 1][8] % mod;
}

console.log(DP[N].reduce((a,b)=>a+b,0) % mod);