const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = +input[0];

let dp = new Array(N + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= N; i+=2){
    dp[i] = dp[i - 2] * 3;
    for (let j = 4; j <= i; j += 2){
        dp[i] += dp[i - j] * 2;
    }
}
console.log(N%2 ===1 ? 0 :dp[N]);

