const fs = require('fs');
const { off } = require('process');
const { consumers } = require('stream');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a,b]=input[0].split(' ').map(x=>+x);
let cmd = input[1].split(' ').map(x=>+x);
var gcd;

if(cmd.length!==1){
  for(let i=0; i<a; i++){
    if(gcd==null){
      gcd = getGcd( Math.abs(cmd[i] - b), Math.abs(cmd[i+1] - b) )
    }else{
      gcd = getGcd( gcd , Math.abs(cmd[i] - b) )
    }
  }
}else{
  gcd = Math.abs(cmd[0] - b);
}

console.log(gcd);

var temp;
function getGcd(a,b){
  while(b!=0){
    temp=a%b;
    a=b;
    b=temp;
  }
  return a;
}