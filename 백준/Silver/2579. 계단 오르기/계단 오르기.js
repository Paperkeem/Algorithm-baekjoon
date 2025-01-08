const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = +input[i];
}
const temp = Array.from(Array(n + 1), () => [0, 0]);
temp[0] = [0, 0];
temp[1] = [arr[0], 0];
temp[2] = [arr[1], arr[0] + arr[1]];

for (let i = 3; i < temp.length; i++) {
  temp[i][0] = Math.max(temp[i - 2][0], temp[i - 2][1]) + arr[i - 1];
  temp[i][1] = temp[i - 1][0] + arr[i - 1];
}

console.log(Math.max(temp[n][0], temp[n][1]));
