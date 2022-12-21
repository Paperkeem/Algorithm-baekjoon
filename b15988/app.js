const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = input[0];
let mod = 1000000009;
let max = Math.max(...input);
let DP = [0, 1, 2, 4];

for(let i=4; i<=max; i++){
    DP[i] = (DP[i - 1] + DP[i - 2] + DP[i - 3]) % mod;
}
  
for(let i=1; i<=N; i++){
    console.log(DP[input[i]]);
}


