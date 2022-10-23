const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x=>+x);

let T = input.shift();

for(let i=1; i<=T; i++){
  let A = input.shift();
  let B = input.shift();
  let arr = [];

  for(let i=0; i<=A; i++){
    arr.push([1]);
    for(let j=1; j<B; j++){
      if(i===0){
        arr[i].push(j+1);
      }else{
        arr[i].push(arr[i][j-1]+arr[i-1][j]);
      }
    }
  }
  const floor = A;
  const room = B-1;
  console.log(arr[floor][room]);
}