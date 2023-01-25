const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = input[0];

for(let i=1; i<=N; i++){
  let num = +input[i];
  
  let DP = new Array(num+1).fill(0);
  DP[1]=1;
  DP[2]=2;
  DP[3]=4;

  for(let i=4; i<=num; i++){
    DP[i] = (DP[i-1] + DP[i-2] + DP[i-3]);
  }

  console.log(DP[num]);
}



