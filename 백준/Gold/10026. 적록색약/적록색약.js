const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const order_one = {
  R: 0,
  G: 0,
  B: 0,
};
const order_two = {
  R: 0,
  G: 0,
  B: 0,
};

const board = Array.from(Array(N), () => Array(N).fill(0));
const board_two = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 0; i < input.length; i++) {
  board[i] = input[i].split("");
  board_two[i] = input[i].split("").map((el) => {
    if (el === "G") {
      return "R";
    } else return el;
  });
}

const checkBoard = (board, el) => {
  let cnt = 0;
  const visited = Array.from(Array(N), () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] !== el || visited[i][j]) continue;

      const queue = [];
      queue.push([i, j]);
      visited[i][j]++;
      cnt++;

      while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
          if (board[nx][ny] !== el || visited[nx][ny]) continue;

          visited[nx][ny]++;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return cnt;
};

for (const el of Object.keys(order_one)) {
  const cnt_one = checkBoard(board, el);
  const cnt_two = checkBoard(board_two, el);

  order_one[el] = cnt_one;
  order_two[el] = cnt_two;
}

console.log(
  Object.values(order_one).reduce((acc, cur) => acc + cur, 0),
  Object.values(order_two).reduce((acc, cur) => acc + cur, 0)
);
