const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
const arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = BigInt(input[i]);
}

arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let cnt = 0;
let maxVal = arr[0];
let maxCnt = 0;

for (let i = 0; i < n; i++) {
  if (i === 0 || arr[i] === arr[i - 1]) {
    cnt++;
  } else {
    if (maxCnt < cnt) {
      maxVal = arr[i - 1];
      maxCnt = cnt;
    }
    cnt = 1;
  }
}

if (cnt > maxCnt) {
  maxVal = arr[n - 1];
}
console.log(String(maxVal));
