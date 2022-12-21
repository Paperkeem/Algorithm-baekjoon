const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
let mod = 10007;
let dp = [];
let temp = [];
dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= N; i++){
    dp[i] = new Array(10).fill(0);
    for (let j = 0; j <= 9; j++){
        for (let k = 1; k <= j; k++){            
            dp[i][j] += dp[i - 1][k] % mod ;
        }   
    }
    temp[i] = dp[i - 1].reduce((a, b) => a + b, 0);
    dp[i][0] += temp[i];
}

console.log(dp[N].reduce((a, b) => a + b, 0) % mod);