const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((n) => +n);

const arr = input[1].split(" ").map((n) => +n);

const temp = Array.from(Array(n + 1), () => 0);
temp[1] = arr[0];

for (let i = 2; i <= n; i++) {
  temp[i] = arr[i - 1] + temp[i - 1];
}

for (let i = 2; i < 2 + m; i++) {
  const [first, end] = input[i].split(" ").map((n) => +n);
  console.log(temp[end] - temp[first - 1]);
}
