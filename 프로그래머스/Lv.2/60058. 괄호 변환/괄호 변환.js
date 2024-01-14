function solution(p) {

  function convert(word) {
    let obj = {
      "(": 0,
      ")": 0,
    };
    let u;
    let v;

    if (!word) return "";

    for (let i = 0; i < word.length; i++) {
      obj[word[i]]++;

      if (obj["("] === obj[")"]) {
        u = word.slice(0, i + 1);
        v = word.slice(i + 1);
        break;
      }
    }

    let isRight = check(u);

    if (isRight) {
      // 올바른 괄호 문자열 일시
      let newWord = convert(v);
      return u + newWord;
    } else {
      // 올바른 괄호 문자열이 아닐 시
      let temp = "(";
      let newWord = convert(v);
      temp += newWord;
      temp += ")";

      // 4-4
      let haveToConvert = u.slice(1, u.length - 1);
      let convertWord = "";
      for (let i = 0; i < haveToConvert.length; i++) {
        if (haveToConvert[i] === "(") {
          convertWord += ")";
        } else {
          convertWord += "(";
        }
      }

      return temp + convertWord;
    }
  }

  let a = convert(p);

  return a;
}

function check(p) {
  var stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") stack.push("(");
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return true;
}