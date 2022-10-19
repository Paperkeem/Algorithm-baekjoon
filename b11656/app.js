const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input[0].split('');
let ans=[];
let N = input.length;

for(let i=0; i<N; i++){
  ans.push(input.join(''));
  input.shift();
}
console.log(ans.sort().join('\n'));