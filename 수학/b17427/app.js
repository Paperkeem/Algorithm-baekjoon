const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(+input[0]);
function solution(a){
  var ans=0;
  for(let i=1; i<=a; i++){
    ans+=Math.floor(a/i)*i
  }
  console.log(ans);
}