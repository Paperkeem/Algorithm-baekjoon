const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

input = input[0];
let sum = 0;

for (let i = 1; i <= input; i *= 10){
  sum += input - i + 1;
}
console.log(sum);
