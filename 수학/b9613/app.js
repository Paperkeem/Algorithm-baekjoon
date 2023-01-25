const fs = require('fs');
const { off } = require('process');
const { consumers } = require('stream');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[0];
let ans=[];

for(let i=1; i<=N; i++){
  let cmd = input[i].split(' ');
  let nums= Number(cmd[0]);
  let result = 0;
  
  for(let j=1; j<=nums; j++){
    for(let r=j+1; r<=nums; r++){
      let common = gcd(Number(cmd[j]), Number(cmd[r]));
      result += common ;
    }
  }
  ans.push(result);
}

console.log(ans.join('\n').trim());

var temp;
function gcd(a,b){
  while(b!=0){
    temp = a%b;
    a=b;
    b=temp;
  }
  return a;
}

