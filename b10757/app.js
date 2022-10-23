const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
let ans = A+B;

console.log(ans.toString());