const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = 0;
let temp = 0;
let board = 0;

for (let i = 0; i < input[0].length; i++) {
  const char = input[0];
  if (char[i] === "(") {
    temp++;
    board++;
  } else if (char[i] === ")") {
    temp--;
    if (char[i - 1] === "(") {
      cnt += temp;
      board--;
    }
  }
}

console.log(cnt + board);
