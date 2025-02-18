const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const stack = [];
const answer = [];

for (let i = 1; i <= N; i++) {
  const [action, data] = input[i].split(" ");
  switch (action) {
    case "push":
      stack.push(data);
      break;
    case "pop":
      if (stack.length > 0) {
        const pop = stack.pop();
        answer.push(pop);
      } else {
        answer.push(-1);
      }
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      if (stack.length > 0) {
        answer.push(0);
      } else {
        answer.push(1);
      }
      break;
    case "top":
      if (stack.length > 0) {
        answer.push(stack[stack.length - 1]);
      } else {
        answer.push(-1);
      }
      break;

    default:
      break;
  }
}

console.log(answer.join("\n"));
