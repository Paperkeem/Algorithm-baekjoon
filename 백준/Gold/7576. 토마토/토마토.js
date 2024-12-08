const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [m, n] = input[0].split(" ").map(Number);

const board = Array.from(Array(n), () => []);
const visited = Array.from(Array(n), () => Array(m).fill(-1));

for (let i = 1; i < input.length; i++) {
  board[i - 1] = input[i].trim().split(" ").map(Number);
}

const queue = [];
let head = 0;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let initial = 0;
let later = 0;
let max = -1;

for (let j = 0; j < n; j++) {
  for (let k = 0; k < m; k++) {
    if (board[j][k] === 1) {
      visited[j][k] = 1;
      queue.push([j, k]);
    }
    if (board[j][k] === -1) {
      initial++;
    }
  }
}

while (queue.length > head) {
  const [x, y] = queue[head++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      continue;
    }

    if (board[nx][ny] === -1 || visited[nx][ny] > 0) {
      continue;
    }

    visited[nx][ny] = visited[x][y] + 1;
    queue.push([nx, ny]);
  }
}

for (let j = 0; j < n; j++) {
  for (let k = 0; k < m; k++) {
    if (visited[j][k] === -1) {
      later++;
    }
    max = Math.max(max, visited[j][k]);
  }
}

console.log(initial < later ? -1 : max - 1);
