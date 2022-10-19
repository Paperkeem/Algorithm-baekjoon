const fs = require('fs');
const { off } = require('process');
const { consumers } = require('stream');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

let ans='';

const bin = {
  '0' : '000',
  '1' : '001',
  '2' : '010',
  '3' : '011',
  '4' : '100',
  '5' : '101',
  '6' : '110',
  '7' : '111',
}

const first =  {
  '0' : '0',
  '1' : '1',
  '2' : '10',
  '3' : '11',
  '4' : '100',
  '5' : '101',
  '6' : '110',
  '7' : '111',
}

while(input.length>1){
  ans = bin[input.pop()] + ans;
}

console.log(first[input.pop()]+ans);