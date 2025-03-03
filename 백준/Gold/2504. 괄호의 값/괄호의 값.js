const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const stack = [];

if (!checkPossible()) {
  return console.log(0);
}

for (let i = 0; i < input[0].length; i++) {
  const top = stack[stack.length - 1];
  const cur = input[0];

  if (cur[i] === "(" || cur[i] === "[") {
    stack.push(cur[i]);
  } else if (cur[i] === ")" || cur[i] === "]") {
    const reverse = cur[i] === ")" ? "(" : "[";
    const value = reverse === "(" ? 2 : 3;

    if (top === reverse) {
      stack.pop();
      stack.push(value);
    } else {
      let temp = 0;
      while (1) {
        const pop = stack.pop();
        if (typeof pop === "number") {
          temp += pop;
        } else if (pop === reverse) {
          stack.push(temp * value);
          break;
        }
      }
    }
  }
}

function checkPossible() {
  const tempStack = [];
  let flag = true;
  const cur = input[0];

  for (let i = 0; i < input[0].length; i++) {
    if (cur[i] === "(" || cur[i] === "[") {
      tempStack.push(cur[i]);
    } else if (cur[i] === ")" || cur[i] === "]") {
      const reverse = cur[i] === ")" ? "(" : "[";
      const pop = tempStack.pop();
      if (pop !== reverse) {
        flag = false;
        break;
      }
    }
  }

  return tempStack.length === 0 && flag ? true : false;
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
