const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = +input.shift();
let dp = [[0, input[0], input[0]]];
    
    for (let i = 1; i < N; i++){
        dp[i] = [
            Math.max(...dp[i - 1]),
            dp[i-1][0] + input[i],
            dp[i-1][1] + input[i]
        ];
    }
console.log(dp)
console.log(Math.max(...dp[N - 1]));
