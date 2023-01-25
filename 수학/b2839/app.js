const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = +input.shift();
let cnt=0;


while(true){
  if(N % 5 == 0){
    console.log(N / 5 + cnt);
    break
  }else if(0 > N){
    console.log(-1);
    break
  }

  cnt++;
  N -= 3;
}