const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const dx = [2, 1, -2, -1, 2, 1, -2, -1];
const dy = [1, 2, 1, 2, -1, -2, -1, -2];
const answer = [];

for (let i = 0; i < input.length; i++) {
  const cur = input[i].split(" ");

  if (cur.length === 1) {
    const I = Number(cur[0]);
    const now = input[i + 1].split(" ").map((x) => +x);
    const move = input[i + 2].split(" ").map((x) => +x);

    const queue = [];
    const visited = Array(I)
      .fill(false)
      .map(() => Array(I).fill(false));
    queue.push([...now, 0]);
    visited[now[0]][now[1]] = 0;

    if (now[0] === move[0] && now[1] === move[1]) {
      answer.push(0);
      continue;
    }

    while (queue.length) {
      const [x, y, dir] = queue.shift();

      for (let j = 0; j < 8; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
        if (visited[nx][ny]) continue;

        queue.push([nx, ny, dir + 1]);
        visited[nx][ny] = dir + 1;
      }
    }
    answer.push(visited[move[0]][move[1]]);
  }
}

console.log(answer.join("\n"));
