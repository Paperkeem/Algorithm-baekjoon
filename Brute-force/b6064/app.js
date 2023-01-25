const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input.shift();

for (let i = 0; i < input.length; i++){
  let cmd = input[i].split(' ').map(x => +x);
  let [M, N, x, y] = [...cmd];
  let [X, Y] = [0, 0]
  let cnt = 0;
  let flag = false;
  while (x !== X || y !== Y) {
    X++;
    Y++;
    cnt++;

    if (X > M) {
      X = X - M;
    }
    if (Y > N) {
      Y = Y - N;
    }

    if (X == M && Y == N) {
      console.log(-1);
      flag = true;
      break;
    }
  }
  
  if (flag == false) {
    console.log(cnt);
  }
}