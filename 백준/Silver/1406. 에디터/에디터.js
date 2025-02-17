const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const value = new Array(600000 + 5).fill(0);
const prev = new Array(600000 + 5).fill(-1);
const next = new Array(600000 + 5).fill(-1);

let unused = 1;
let cursor = 0;

input[0].split("").forEach((char, index) => {
  insert(cursor, char);
  cursor++;
});

function insert(addr, val) {
  value[unused] = val;
  prev[unused] = addr;
  next[unused] = next[addr];

  if (next[addr] !== -1) prev[next[addr]] = unused;
  next[addr] = unused;

  unused++;
}

function erase(addr) {
  next[prev[addr]] = next[addr];
  if (next[addr] !== -1) prev[next[addr]] = prev[addr];
}

for (let i = 2; i < input.length; i++) {
  const [action, data] = input[i].split(" ");
  switch (action) {
    case "L":
      if (prev[cursor] !== -1) {
        cursor = prev[cursor];
      }
      break;

    case "D":
      if (next[cursor] !== -1) {
        cursor = next[cursor];
      }
      break;

    case "B":
      if (prev[cursor] !== -1) {
        erase(cursor);
        cursor = prev[cursor];
      }
      break;

    case "P":
      insert(cursor, data);
      cursor = next[cursor];
      break;
  }
}

let temp = 0;
const arr = [];
while (temp !== -1) {
  arr.push(value[next[temp]]);
  temp = next[temp];
}
console.log(arr.join(""));
