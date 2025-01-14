const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i]
    .trim()
    .split(" ")
    .map((n) => +n);
}

const temp = Array.from(Array(n), () => []);
temp[0] = arr[0];

for (let i = 1; i < n; i++) {
  temp[i][0] = arr[i][0] + Math.min(temp[i - 1][1], temp[i - 1][2]);
  temp[i][1] = arr[i][1] + Math.min(temp[i - 1][2], temp[i - 1][0]);
  temp[i][2] = arr[i][2] + Math.min(temp[i - 1][0], temp[i - 1][1]);
}

console.log(Math.min(...temp[n - 1]));
