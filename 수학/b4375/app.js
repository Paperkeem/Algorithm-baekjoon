// const fs = require('fs');
// const { arrayBuffer } = require('stream/consumers');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

console.log(input);
input = input.map((item)=>+item);
console.log(input);

for(let i=0; i<input.length; i++){
  solution(input[i]);
}

function solution(A){

  var multiplyer=1;
  var count=1;

  // while(multiplyer % A != 0){
  //   multiplyer=(multiplyer*10+1) % A;
  //   count++;
  // }
  // console.log(count);

  for(let i=0; ; i++){
    multiplyer=(multiplyer*10+1) % A;
    count++;
      if(multiplyer==0){
        console.log(count);
        break;
      }
  }

}