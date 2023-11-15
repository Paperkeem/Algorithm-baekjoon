function solution(dirs) {
  const move = { U: [0, 1], R: [1, 0], D: [0, -1], L: [-1, 0] };
  let now = [0, 0];
  const answer = new Set();

  for (const dir of dirs) {
    const nowX = now[0] + move[dir][0];
    const nowY = now[1] + move[dir][1];

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    answer.add("" + now[0] + now[1] + nowX + nowY);
    answer.add("" + nowX + nowY + now[0] + now[1]);

    now = [nowX, nowY];
  }

  return answer.size / 2;
}