const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];
for (let i = 0; i < input.length; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(" || input[i][j] === "[") {
      stack.push(input[i][j]);
    } else if (input[i][j] === ")") {
      const temp = stack.pop();
      if (temp !== "(") {
        answer.push("no");
        break;
      }
    } else if (input[i][j] === "]") {
      const temp = stack.pop();
      if (temp !== "[") {
        answer.push("no");
        break;
      }
    } else if (input[i][j] === "." && j !== 0) {
      if (stack.length !== 0) {
        answer.push("no");
      } else {
        answer.push("yes");
      }
      break;
    }
  }
}
console.log(answer.join("\n"));
