const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let N = input[0];
let max = Math.max(...input);
let arr = [[0,0,0],[1,0,0],[0,1,0],[1,1,1]]

for(let i=4; i<=max; i++){
  arr[i] = [ (arr[i-1][1]+arr[i-1][2])%1000000009 , (arr[i-2][0]+arr[i-2][2])%1000000009 , (arr[i-3][0]+arr[i-3][1])%1000000009 ]
}

for(let k=1; k<=N; k++){
  console.log( arr[input[k]].reduce((a,v)=>a+v,0) % 1000000009 )
} 