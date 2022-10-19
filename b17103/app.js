const fs = require('fs');
const { maxHeaderSize } = require('http');
const { off } = require('process');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input=input.map(x=>+x);
let N=input[0];
let max=Math.max(...input);
let result=[];

let arr = new Array(max+1).fill(true);
arr[0]=false;
arr[1]=false;


for(let j=2; j<=max/2; j++){
  for(let k=2; k<=max/j; k++){
      arr[k*j]=false;
  }
}

for(let i=1; i<=N; i++){
  let cmd= +input[i];
  var cnt=0;
  
  for(let r=1; r<=cmd/2; r++){   
    if( arr[r] && arr[cmd-r] ){
      cnt+=1;
      console.log(r)
      console.log(cmd-r)
    }
  }
  result.push(cnt);
  console.log('----')
  }

console.log(result.join('\n'));