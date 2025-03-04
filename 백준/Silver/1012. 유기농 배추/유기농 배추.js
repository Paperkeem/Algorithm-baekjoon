const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input.shift());
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < input.length; i++) {
  let cnt = 0;
  const arr = input[i].split(" ").map((x) => Number(x));

  if (arr.length === 3) {
    const [N, M, K] = arr; // N 가로, M 세로
    const board = Array.from(Array(M), () => Array(N).fill(0));
    const visited = Array.from(Array(M), () => Array(N).fill(0));

    // 보드 채우기
    for (let j = i + 1; j < input.length; j++) {
      const cur = input[j].split(" ").map((x) => Number(x));

      if (cur.length !== 2) {
        break;
      }

      const [y, x] = cur;
      board[x][y]++;
    }

    for (let a = 0; a < M; a++) {
      // 가로
      for (let b = 0; b < N; b++) {
        // 세로
        const queue = [];

        if (board[a][b] === 1 && !visited[a][b]) {
          queue.push([a, b]);
          visited[a][b]++;
          cnt++;

          while (queue.length > 0) {
            const [cx, cy] = queue.shift();

            for (let d = 0; d < 4; d++) {
              const nx = cx + dx[d];
              const ny = cy + dy[d];

              if (nx < 0 || nx >= M || ny < 0 || ny >= N) {
                continue;
              }
              if (visited[nx][ny] || board[nx][ny] !== 1) {
                continue;
              }

              visited[nx][ny]++;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
    console.log(cnt);
  }
}
