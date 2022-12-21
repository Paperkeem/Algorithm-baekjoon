const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
let dp = [[+input[0]]];

for (let i = 1; i < N; i++){
    dp[i] = [...input[i].split(' ').map(x => +x)];
    for (let j = 0; j <= i; j++){
        dp[i][j] = Math.max((dp[i - 1][j - 1] || 0), (dp[i - 1][j] || 0)) + dp[i][j];
    }
}
    
console.log(dp)
console.log(Math.max(...dp[N - 1]));
