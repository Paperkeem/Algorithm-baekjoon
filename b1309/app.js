const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
let mod = 9901;
let dp = Array.from(Array(N+1),()=>[]);
dp[1] = [1, 1, 1];

for (let i = 2; i <= N; i++){
    dp[i][0] = (dp[i - 1][0]+ dp[i - 1][1] + dp[i - 1][2]) % mod;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod;
    dp[i][2] = (dp[i - 1][0]+ dp[i - 1][1]) % mod;
   
}
console.log(dp[N].reduce((a, b) => a + b, 0) % mod);