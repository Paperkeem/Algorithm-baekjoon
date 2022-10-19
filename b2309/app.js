const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input=input.map(item=>Number(item));

solution(input);

function solution(Arr){
  Arr=Arr.sort((a,b)=>a-b);
  let ans=Arr.reduce((acc,cur)=>acc+cur);
  ans=ans-100;

  // let a1, a2;
  for(let i=0; i<8; i++){
    for(let j=i+1; j<9; j++){
      if(Arr[i] + Arr[j] == ans){
        // [a1, a2] = [i, j];
        let a = Arr.findIndex(x=>x==Arr[i])
        Arr.splice(a,1);
        let b = Arr.findIndex(x=>x==Arr[j])
        Arr.splice(b-1,1);
      }
    }
  }
  // for(let i=0; i<9; i++){
  //   if(i !== a1 && i !== a2){
  //     console.log(Arr[i])
  //   }
  // }
  console.log(Arr.sort((a,b)=>a-b).join('\n'))
}