const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();

for (let k = 0; k < N; k++){
    let num = +input.shift();
    let left = input.shift().split(' ').map(x => +x);
    let right = input.shift().split(' ').map(x => +x);
   
    let dp = [[0, left[0], right[0]]];
    
    for (let i = 1; i < num; i++){
        dp[i] = [
            Math.max(...dp[i - 1]),
            Math.max(dp[i-1][0] , dp[i-1][2]) + left[i],
            Math.max(dp[i-1][0], dp[i-1][1]) + right[i]
        ];
    }
    console.log(dp)
    console.log(Math.max(...dp[num-1]));
}