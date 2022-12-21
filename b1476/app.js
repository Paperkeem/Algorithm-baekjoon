const fs = require('fs');
const { maxHeaderSize } = require('http');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [E, S, M] = input[0].split(' ').map(x => +x);
let temp = 1;

while (true) {
  if ((temp - E) % 15 == 0 &&
    (temp - S) % 28 == 0 &&
    (temp - M) % 19 == 0) {
    console.log(temp);
    process.exit();
    }
  temp++;
}

