const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

var temp="";
var ans="";
var tag='>';

input=input[0].split('');

for(let i=0; i<input.length; i++){
  let a = input[i];
  if(a=='<'){
    tag='<';
    ans += temp.split('').reverse().join('') + a;
    temp= "";
  }else if(a=='>'){
    tag='>';
    ans+=temp+a;
    temp="";
  }else if(a==" "){
    if(tag=="<"){
      ans += temp ;
    }else{
      ans += temp.split('').reverse().join(''); 
    }
    ans += " ";
    temp = "";
  }else{
    temp += a
  }
}
ans += temp.split('').reverse().join('');
console.log(ans);