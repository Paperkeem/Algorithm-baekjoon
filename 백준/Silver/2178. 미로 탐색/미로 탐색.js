const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((n) => +n);

const board = Array.from(Array(n), () => []);
const visited = Array.from(Array(n), () => Array(m).fill(-1));

for (let i = 1; i < input.length; i++) {
  board[i - 1] = input[i]
    .trim()
    .split("")
    .map((n) => +n);
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const queue = [[0, 0]];
visited[0][0] = 0;

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nX = x + dx[i];
    const nY = y + dy[i];

    if (nX < 0 || nX >= n || nY < 0 || nY >= m) {
      continue;
    }
    if (visited[nX][nY] >= 0 || board[nX][nY] !== 1) {
      continue;
    }

    visited[nX][nY] = visited[x][y] + 1;
    queue.push([nX, nY]);
  }
}

console.log(visited[n - 1][m - 1] + 1);
