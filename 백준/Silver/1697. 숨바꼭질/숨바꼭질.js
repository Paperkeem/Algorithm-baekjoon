const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const visited = Array.from(Array(100001)).fill(-1);
const queue = [n];
visited[n] = 0;

const dx = [1, -1, 2];

if (n === m) {
  console.log(0);
  process.exit(0);
}

while (queue.length > 0) {
  const x = queue.shift();

  for (let i = 0; i < 3; i++) {
    let nx;
    if (i !== 2) {
      nx = x + dx[i];
    } else {
      nx = x * dx[i];
    }

    if (nx < 0 || nx > 100000) {
      continue;
    }

    if (nx === m) {
      console.log(visited[x] + 1);
      process.exit(0);
    }

    if (visited[nx] >= 0) {
      continue;
    }

    visited[nx] = visited[x] + 1;
    queue.push(nx);
  }
}
