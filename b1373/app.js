const fs = require('fs');
const { off } = require('process');
const { consumers } = require('stream');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input=input[0].split('');

if(input.length % 3 != 0){
  while( input.length % 3 != 0 ){
    input.unshift('0');
  }
}

var result=[];

for(let i=0; i<input.length; i+=3){
  var temp=0;
  
  if(input[i] === '1'){
    temp += 4;
  }
  if(input[i+1] === '1'){
    temp += 2;
  }
  if(input[i+2] === '1'){
    temp += 1;
  }

  result.push(temp);
}

console.log(result.join(''));
