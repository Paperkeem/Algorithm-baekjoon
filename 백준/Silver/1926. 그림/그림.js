const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((n) => +n);

const board = Array.from(Array(n), () => []);
const visited = Array.from(Array(n), () => Array(m).fill(0));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let cnt = 0;
let max = 0;

for (let i = 1; i < input.length; i++) {
  board[i - 1] = input[i].split(" ").map((n) => +n);
}

for (let j = 0; j < n; j++) {
  for (let k = 0; k < m; k++) {
    if (board[j][k] === 1 && visited[j][k] !== 1) {
      cnt++;

      const queue = [[j, k]];
      let maxDrawing = 0;

      visited[j][k] = 1;
      maxDrawing++;

      while (queue.length > 0) {
        const [x, y] = queue.pop();

        for (i = 0; i < 4; i++) {
          const nX = x + dx[i];
          const nY = y + dy[i];

          if (nX < 0 || nX > n - 1 || nY < 0 || nY > m - 1) {
            continue;
          }
          if (visited[nX][nY] === 1 || board[nX][nY] === 0) {
            continue;
          }

          if (board[nX][nY] === 1) {
            maxDrawing++;
            visited[nX][nY] = 1;
            queue.push([nX, nY]);
          }
        }
      }

      max = Math.max(max, maxDrawing);
    }
  }
}

console.log(cnt);
console.log(max);
