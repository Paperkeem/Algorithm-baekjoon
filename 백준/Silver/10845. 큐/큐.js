const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const queue = [];
const answer = [];

for (let i = 1; i <= N; i++) {
  const [action, data] = input[i].split(" ");
  switch (action) {
    case "push":
      queue.push(data);
      break;
    case "pop":
      if (queue.length > 0) {
        const pop = queue.shift();
        answer.push(pop);
      } else {
        answer.push(-1);
      }
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      if (queue.length > 0) {
        answer.push(0);
      } else {
        answer.push(1);
      }
      break;
    case "front":
      if (queue.length > 0) {
        answer.push(queue[0]);
      } else {
        answer.push(-1);
      }
      break;
    case "back":
      if (queue.length > 0) {
        answer.push(queue[queue.length - 1]);
      } else {
        answer.push(-1);
      }
      break;

    default:
      break;
  }
}

console.log(answer.join("\n"));
