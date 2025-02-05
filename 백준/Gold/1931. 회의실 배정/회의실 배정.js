const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
let last = 0;
let cnt = 0;

for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i];
}

arr.sort(
  (a, b) =>
    Number(a.split(" ")[1]) - Number(b.split(" ")[1]) ||
    Number(a.split(" ")[0]) - Number(b.split(" ")[0])
);

for (let i = 0; i < arr.length; i++) {
  const [a, b] = arr[i].split(" ").map((n) => +n);

  if (i === 0 || a >= last) {
    last = b;
    cnt++;
  }
}

console.log(cnt);
