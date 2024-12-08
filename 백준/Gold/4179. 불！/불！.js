const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const board = Array.from(Array(n), () => []);
const visited = Array.from(Array(n), () => Array(m).fill(-1));
const jihon = Array.from(Array(n), () => Array(m).fill(-1));

for (let i = 1; i < input.length; i++) {
  board[i - 1] = input[i].trim().split("");
}

const queue = [];
const johonQueue = [];
let min = -1;

for (let j = 0; j < n; j++) {
  for (let k = 0; k < m; k++) {
    if (board[j][k] === "F") {
      visited[j][k] = 0;
      queue.push([j, k]);
    }

    if (board[j][k] === "J") {
      jihon[j][k] = 0;
      johonQueue.push([j, k]);
    }
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      continue;
    }

    if (board[nx][ny] === "#" || visited[nx][ny] >= 0) {
      continue;
    }

    visited[nx][ny] = visited[x][y] + 1;
    queue.push([nx, ny]);
  }
}

while (johonQueue.length > 0) {
  const [x, y] = johonQueue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      if (min === -1) {
        min = jihon[x][y] + 1;
      }
      min = Math.min(min, jihon[x][y] + 1);
      continue;
    }

    if (board[nx][ny] === "#" || jihon[nx][ny] >= 0) {
      continue;
    }

    if (visited[nx][ny] !== -1 && jihon[x][y] + 1 >= visited[nx][ny]) {
      continue;
    }

    jihon[nx][ny] = jihon[x][y] + 1;
    johonQueue.push([nx, ny]);
  }
}

console.log(min === -1 ? "IMPOSSIBLE" : min);
