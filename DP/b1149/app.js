const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input = input.map(v => v.split(' ').map(v => +v))

for (let i = 1; i < N; i++){
    input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
    input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
    input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2];
}
console.log(Math.min(...input[N-1]));