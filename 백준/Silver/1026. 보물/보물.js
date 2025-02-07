const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const left = input[1]
  .split(" ")
  .map((n) => parseInt(n))
  .sort((a, b) => a - b);
const right = input[2]
  .split(" ")
  .map((n) => parseInt(n))
  .sort((a, b) => b - a);

const answer = [];
for (let i = 0; i < n; i++) {
  answer[i] = left[i] * right[i];
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
