function solution(N, road, K) {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  for (let value of road) {
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  }

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();
    for (let line of lines[to]) {
      if (arr[line.to] > arr[to] + line.cost) {
        arr[line.to] = arr[to] + line.cost;
        queue.push(line);
      }
    }
  }
  return arr.filter((v) => v <= K).length;
}