// 첫번째 fs 모듈

const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0], input[1]);

function solution(a,b){
  if(a>0 && b>0){
    console.log(1);
  }else if(a<0 && b>0){
    console.log(2);
  }else if(a<0 && b<0){
    console.log(3);
  }else if(a>0 && b<0){
    console.log(4);
  }
}


// 두번째 readline 모듈
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let a = input[0];
    let b = input[1];
    if(a>0 && b>0){
      console.log(1);
    }else if(a<0 && b>0){
      console.log(2);
    }else if(a<0 && b<0){
      console.log(3);
    }else if(a>0 && b<0){
      console.log(4);
    }
  process.exit();
});