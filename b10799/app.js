const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

var temp=0;
var ans=0;
var num=0;
var tag='(';

input=input[0].split('');

for(let i=0; i<input.length; i++){
  let a = input[i];
  if(a=='('){
    tag='(';
    temp++;
  }else if(a==')'){
    if(tag=='('){
      temp--;
      ans+=temp;
      tag=')';
    }else if(tag==')'){
      temp--;
      num++;
    }
  }
}
console.log(ans+num);