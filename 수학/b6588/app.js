const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input=input.map((item)=>Number(item))

solution(input);

function solution(Arr){
    let largeNum = Math.max(...Arr);
    let arr = Array(largeNum+1).fill(true);
    arr[0]=arr[1]=false;
    for(let i=2; (i*i)<=largeNum; i++){
      if(arr[i]){
        for(let j=i*i; j<=largeNum; j+=i){
          arr[j] = false;
          console.log("j : "+j+", i : " + i)
        }
      }
    }
    let result="";
    Arr.map((x)=> {
      for(let i =3; i < x; i+=2){
        if(arr[i] && arr[x - i]){
          result += `${x} = ${i} + ${x - i}\n`;
          break;
        }
      }
    });
    console.log(result);
  }