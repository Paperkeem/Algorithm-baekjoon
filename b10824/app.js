const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input[0].split(' ');
let a = Number(input[0]+input[1]);
let b = Number(input[2]+input[3]);
console.log(a+b);