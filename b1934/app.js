const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input.shift();
let ans=[];

for(let i=0; i<N; i++){
  let [a,b] = input[i].split(' ').map(x=>+x);
  let cmd = input[i].split(' ').map(x=>+x);
  let rest;
  let temp = 0;
  
  while(rest!=0){

    rest = cmd[1]%cmd[0]

    temp=cmd[0]
    cmd[1]=cmd[0]
    cmd[0]=rest
  }

  ans.push(a * b / temp); 
}
console.log(ans.join('\n'));