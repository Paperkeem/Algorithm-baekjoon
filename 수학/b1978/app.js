const fs = require('fs');
const { maxHeaderSize } = require('http');
const { off } = require('process');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let Arr = input[1].split(' ').map((item)=>+item);

solution(+input[0], Arr);

function solution(T, Arr){
  let count=0;

  console.log(Arr);

  for(let i=0; i<Arr.length; i++){
    if(Arr[i]<2){
      continue;
    }else if(Arr[i]==2){
      count++;
    }else if(Arr[i]>2){
      var anwser = 0;
      for(let j=2; j<Arr[i]; j++){
        if(Arr[i]%j === 0){
          anwser++;
        }
      }
      if(anwser==0){
        count++;
      }
    }
  }
  console.log(count);
}