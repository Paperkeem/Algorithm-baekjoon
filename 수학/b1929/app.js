const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input[0];
input=input.split(' ').map((item)=>Number(item))

solution(input[0], input[1]);

function solution(a,b){
  let arr = new Array(b+1).fill(true);
  arr[0]=arr[1]=false;

  console.log(arr);

  for(let i=2; (i*i)<=b; i++){
    if(arr[i]){
      for(let j=i*i; j<=b; j+=i){
        arr[j] = false;
        console.log('j : '+j+', i : '+i)
      }
    }
  }
  let result=[]
  for(let i=a; i<=b; i++){
    if(arr[i]){
      result.push(i);
    }
  }
  console.log(result.join('\n'));
}