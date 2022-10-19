const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input[0].split(' ');

let cmd=input[0].split('').reverse();
let N = input[1];
let ans = 0;

console.log(N)

for(let i=0; i<cmd.length; i++){
  let a = Math.pow(N,i)
  
  if( cmd[i] >=0 && cmd[i] <=9 ){
    cmd[i] = +cmd[i]
  }else{
    cmd[i] = cmd[i].charCodeAt()-55;
  }

  ans += cmd[i] * a;
}
console.log(ans);