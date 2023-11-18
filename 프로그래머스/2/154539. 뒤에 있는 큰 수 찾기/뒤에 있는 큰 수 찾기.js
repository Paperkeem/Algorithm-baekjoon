function solution(numbers) {
  let answer = [];

  let max = -1;
  let stack = [];

  for (i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] >= max) {
      max = numbers[i];
      stack = [];
      stack.push(numbers[i]);
      answer.push(-1);
    } else {
      let j = 0;
      while (true) {
        if (numbers[i] < stack[j]) {
          answer.push(stack[j]);
          stack.unshift(numbers[i]);
          break;
        } else {
          stack.shift();
        }
      }
    }
  }

  return answer.reverse();
}