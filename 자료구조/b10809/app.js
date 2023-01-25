const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split('');
let ans = Array(26).fill(-1);
let temp=[];
let cnt=0;

for(let i=0; i<input.length; i++){
  let cur=input[i];
  if(cur.charCodeAt()>=97|| cur.charCodeAt()<=122){
    if(temp.includes(cur)){
      cnt++;
      continue;
    }
    temp.push(cur);
    ans[cur.charCodeAt()-97]=cnt;
    cnt++;
  }
}
console.log(ans.join(' '));