const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const answer = [];

for (let i = 0; i < input.length; i++) {
  const cur = input[i].split(" ");

  if (cur.length === 2) {
    const [w, h] = cur.map((x) => Number(x));

    const fire_queue = [];
    const queue = [];
    const board = Array(h)
      .fill(false)
      .map(() => Array(w).fill(false));
    const fire_visited = Array(h)
      .fill(false)
      .map(() => Array(w).fill(false));
    const visited = Array(h)
      .fill(false)
      .map(() => Array(w).fill(false));

    for (let k = i + 1; k <= i + h; k++) {
      for (let j = 0; j < w; j++) {
        const current = input[k].split("");
        const atom = input[k][j];
        board[k - i - 1] = current;

        if (atom === "*") {
          fire_queue.push([k - i - 1, j, 0]);
          fire_visited[k - i - 1][j] = 0;
        }
        if (atom === "@") {
          queue.push([k - i - 1, j, 0]);
          visited[k - i - 1][j] = 0;
        }
      }
    }

    let fire_idx = 0;
    while (fire_queue.length > fire_idx) {
      const [x, y, dir] = fire_queue[fire_idx++];

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;
        if (fire_visited[nx][ny] !== false || board[nx][ny] === "#") continue;

        fire_queue.push([nx, ny, dir + 1]);
        fire_visited[nx][ny] = dir + 1;
      }
    }

    let idx = 0;
    while (queue.length > idx) {
      const [x, y, dir] = queue[idx++];

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;
        if (visited[nx][ny] !== false || board[nx][ny] === "#") continue;

        if (fire_visited[nx][ny] !== false && dir + 1 >= fire_visited[nx][ny]) {
          continue;
        }

        queue.push([nx, ny, dir + 1]);
        visited[nx][ny] = dir + 1;
      }
    }

    const temp = [];
    for (let a = 0; a < h; a++) {
      for (let b = 0; b < w; b++) {
        if (a === 0 || b === 0 || a === h - 1 || b === w - 1) {
          if (typeof visited[a][b] !== "number") continue;
          temp.push(visited[a][b]);
        }
      }
    }

    answer.push(temp.length === 0 ? "IMPOSSIBLE" : Math.min(...temp) + 1);
  }
}

console.log(answer.join("\n"));
