const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [a,b] = input[0].split(' ').map(x=>+x);
let N = +input[1];
let number = input[2].split(' ').map(x=>+x);
let result = 0;
let ans = [];


for(let i=0; i<N; i++){
  let c = Math.pow(a, i);
  let d = number.pop();
  result += c * d 
}

if(result == 0){
  console.log(0)
}else{
  while(result / b != 0 ){
    let temp = result % b;
    ans.push(temp);
    result = Math.floor(result/b);
  }
}

console.log(ans.reverse().join(' '));