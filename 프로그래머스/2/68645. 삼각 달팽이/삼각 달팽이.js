function solution(n) {
  var answer = Array(n)
    .fill()
    .map((_, i) => new Array(i + 1).fill());

  let size = (n * (n + 1)) / 2;
  let [i, j, cnt] = [0, 0, 1];

  while (cnt <= size) {
    while (i < n && !answer[i][j]) {
      answer[i++][j] = cnt++;
    }

    i--;
    j++;
    while (j < n && !answer[i][j]) {
      answer[i][j++] = cnt++;
    }

    i--;
    j -= 2;
    while (i > 0 && j > 0 && !answer[i][j]) {
      answer[i--][j--] = cnt++;
    }

    i += 2;
    j++;
  }

  return answer.flat();
}