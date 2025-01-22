const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const mod = 10007;

const temp = Array.from(Array(n + 1), () => 0);

temp[1] = 1;
temp[2] = 2;

if (n === 1 || n === 2) {
  return console.log(temp[n] % mod);
}

for (let i = 3; i <= n; i++) {
  temp[i] = (temp[i - 1] + temp[i - 2]) % mod;
}

console.log(temp[n] % mod);
