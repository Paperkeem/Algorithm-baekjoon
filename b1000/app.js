const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];

for(let i=1; i<=N; i++){
  let [a,b,c] = input[i].split(' ').map(x=>+x);
  let X = Math.ceil(c / a);
  let Y = c % a;

  X=String(X);
  
  if(X.length==1){
    X='0'+X;
  }
  if(Y==0){
    Y= a;
  }

  console.log(Y+X);
}