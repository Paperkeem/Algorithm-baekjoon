function solution(s) {
  var answer = 0;
  let arr = s.split("");
  const correct = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (j = 0; j < arr.length; j++) {
    let stack = [];
    let isCorrect = true;

    for (i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (el === "[" || el === "{" || el === "(") {
        stack.push(el);
      } else {
        if (correct[el] === stack.at(-1)) {
          stack.pop();
        } else {
          isCorrect = false;
        }
      }
    }
    if (stack.length === 0 && isCorrect === true) {
      answer++;
    }
    const a = arr.shift();
    arr.push(a);
  }

  return answer;
}