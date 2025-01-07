const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = +input[i];
}
const temp = Array.from(Array(12), () => false);
temp[0] = 0;
temp[1] = 1;
temp[2] = 2;
temp[3] = 4;

for (let i = 4; i < temp.length; i++) {
  temp[i] = temp[i - 1] + temp[i - 2] + temp[i - 3];
}

for (let i = 0; i < arr.length; i++) {
  console.log(temp[arr[i]]);
}
