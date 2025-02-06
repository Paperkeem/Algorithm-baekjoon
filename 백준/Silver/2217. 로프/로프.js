const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
const answer = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = parseInt(input[i]);
}

arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
  answer.push(arr[i] * (i + 1));
}

console.log(Math.max(...answer));
