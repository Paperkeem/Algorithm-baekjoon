const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input=input[0].split(' ').map(x => +x);
let num = [...input];
let reverse = num.reverse();
let increase = new Array(N).fill(1);
let decrease = new Array(N).fill(1);

for (let i = 0; i < N; i++){
  for (let j = 0; j < i; j++){
    if (input[i] > input[j]) {
      increase[i] = Math.max(increase[i], increase[j] + 1);
    }
    if (reverse[i] > reverse[j]) {
      decrease[i] = Math.max(decrease[i], decrease[j] + 1);
    }
  }
}

console.log(increase);
console.log(decrease)


var result = new Array(N).fill(0);

for (let i = 0; i < N; i++){
  result[i] = increase[i] + decrease[N - i - 1] - 1;
}

console.log(Math.max(...result));