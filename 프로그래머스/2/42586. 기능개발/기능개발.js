function solution(progresses, speeds) {
  var answer = [];
  let cnt = 0;

  while (progresses.length !== cnt) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let temp = 0;

    for (let i = cnt; i < progresses.length; i++) {
      if (progresses[cnt] >= 100) {
        temp++;
        cnt++;
      } else {
        break;
      }
    }

    if (temp > 0) {
      answer.push(temp);
      temp = 0;
    }
  }

  return answer;
}