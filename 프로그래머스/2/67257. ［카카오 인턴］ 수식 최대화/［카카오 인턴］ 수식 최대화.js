function calculator(a, b, c) {
  let first = Number(a);
  let second = Number(c);

  if (b === "-") {
    return first - second;
  } else if (b === "+") {
    return first + second;
  } else if (b === "*") {
    return first * second;
  }
}

function solution(expression) {
  let convert = expression.split(/(\-|\+|\*)/g);
  let cal = ["-*+", "-+*", "*-+", "*+-", "+-*", "+*-"];
  let max = 0;

  for (let i = 0; i < cal.length; i++) {
    let sunsea = cal[i].split("");
    let arr = [...convert];

    for (let j = 0; j < sunsea.length; j++) {
      while (arr.includes(sunsea[j])) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k] === sunsea[j]) {
            let a = arr.slice(k - 1, k + 2);
            let haveToCalculate = calculator(...a);

            arr.splice(k - 1, 3, haveToCalculate);
            break;
          }
        }
      }
    }
    max = Math.max(max, Math.abs(arr[0]));
  }

  return max;
}