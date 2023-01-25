const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(input);
console.log(+input[0])

let testcaseArr = input[1].split(' ').map((item)=>+item);

console.log(testcaseArr);

solution(+input[0], testcaseArr);

function solution(T, testcaseArr){
  console.log(Math.max(...testcaseArr) * Math.min(...testcaseArr))
}