const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

const arr = Array.from(Array(n + 1), () => 0);
const visited = Array.from(Array(n + 1), () => 0);

for (let i = 2; i <= n; i++) {
  arr[i] = arr[i - 1] + 1;
  visited[i] = i - 1;

  if (i % 2 === 0 && arr[i] > arr[i / 2] + 1) {
    arr[i] = arr[i / 2] + 1;
    visited[i] = i / 2;
  }
  if (i % 3 === 0 && arr[i] > arr[i / 3] + 1) {
    arr[i] = arr[i / 3] + 1;
    visited[i] = i / 3;
  }
}

let flag = n;
let answer = [n];
while (flag !== 1) {
  answer.push(visited[flag]);
  flag = visited[flag];
}

console.log(arr[n]);
console.log(answer.join(" "));
