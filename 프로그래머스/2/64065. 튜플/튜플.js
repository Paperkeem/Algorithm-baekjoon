function solution(s) {
  var answer = [];

  const a = s.split("},");
  const result = a.map((element) => element.replace(/[{}]/g, ""));
  const arr = result.map((element) => element.split(","));
  const sort = arr.sort((a, b) => a.length - b.length);

  for (i = 0; i < sort.length; i++) {
    for (j = 0; j <= i; j++) {
      if (!answer.includes(+sort[i][j])) {
        answer.push(+sort[i][j]);
      }
    }
  }

  return answer;
}