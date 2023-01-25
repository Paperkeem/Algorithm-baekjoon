const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);
var arr = [];

for(let i=1; i<=input[0]; i++){

  if(input[i].includes('push')){
    let a = input[i].toString().trim().split(' ');
    arr.push(a[1]);
  }

  if(input[i]=='pop'){
    if(arr.length==0){
      console.log(-1);
    }else{
      console.log(arr.slice(-1)[0]);
      arr.pop();
    }
  }

  if(input[i]=='size'){
    console.log(arr.length);
  }

  if(input[i]=='empty'){
    if(arr.length==0){
      console.log(1)
    }else{
      console.log(0)
    }
  }

  if(input[i]=='top'){
    if(arr.length==0){
      console.log(-1)
    }else{
      console.log(arr.slice(-1)[0]);
    }
  }
}

// solution(input);

// function solution(arr){
  
// }

