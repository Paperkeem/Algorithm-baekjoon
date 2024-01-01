function solution(storey) {
  var answer = Number.MAX_SAFE_INTEGER;

  function dfs(num, cnt) {
    if (cnt >= answer) return;
    if (num === 0) answer = cnt;

    let res = num % 10;
    dfs(Math.floor(num / 10), cnt + res);
    dfs(Math.floor(num / 10) + 1, cnt + 10 - res);
  }

  dfs(storey, 0);
  return answer;
}