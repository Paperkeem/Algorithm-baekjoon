const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, money] = input[0].split(" ").map((x) => +x);
const arr = [];
let temp = money;
let cnt = 0;

for (let i = 1; i < input.length; i++) {
  arr[i - 1] = Number(input[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  let coin = temp - arr[i];

  while (coin >= 0) {
    cnt++;
    temp = coin;

    coin = temp - arr[i];
  }
}

console.log(cnt);
