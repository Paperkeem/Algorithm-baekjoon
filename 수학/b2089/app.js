const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input=+(input[0]);
var num=input;
var temp;
let ans=[];

  while(num / -2 !== 0){
    temp =  num % -2;  

    if(temp == -1 || temp == 1){
      num = Math.floor(num/-2)+1;
      ans.push(1);
    }else if(temp == 0){
      num = Math.floor(num/-2);
      ans.push(0);
    }
  }

console.log(ans.length == 0 ? 0 : ans.reverse().join(''));
