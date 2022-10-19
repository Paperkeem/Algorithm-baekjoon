const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input[0].split(' ').map(x=>+x);

let num = input[0];
let N = input[1];
let ans=[];

let temp=num;

while(temp/N != 0){
  ans.push(temp % N);
  temp = Math.floor(temp/N);
}


for(let i=0; i<ans.length; i++){
  if(ans[i]>=10 && ans[i]<=35){
    ans[i] = String.fromCharCode(ans[i]+55);
  }
}

console.log(ans.reverse().join(''));