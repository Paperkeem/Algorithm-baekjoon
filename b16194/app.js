const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0];
let arr = input[1].split(' ').map(x=>+x);
let card=[0,...arr]

for(let i=2; i<=num; i++){
  for(let j=1; j<i; j++){
    card[i] = Math.min(card[i] , card[j]+card[i-j]); 
  }
}

console.log(card[num]);